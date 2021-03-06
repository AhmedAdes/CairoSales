﻿/*
 * GET users listing.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

var multer = require('multer');
var storage = multer.memoryStorage({ //multers disk storage settings
    // destination: function (req, file, cb) {
    //     cb(null, './uploads/');
    // },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('photo');


router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT u.*, LineName,(SELECT  dbo.fncUserIMS(u.UserID)) AS IMS FROM dbo.Users u
                    JOIN dbo.SalesLines s ON u.SalesLineID = s.SalesLineID Where JobClass != 'SysAdmin'`)
        .then(function (recordset) {
            res.status(200);
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/chain/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id)
    request.execute("UserChain")
        .then(function (recordset) {
            res.status(200);
            res.json(recordset[0]);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
router.get('/managerChain/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id)
    request.execute("UserManagers")
        .then(function (recordset) {
            res.status(200);
            res.json(recordset[0]);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
})

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT u.*, LineName,(SELECT  dbo.fncUserIMS(u.UserID)) AS IMS FROM dbo.Users u JOIN dbo.SalesLines s ON u.SalesLineID =
                    s.SalesLineID Where JobClass != 'SysAdmin' And u.UserID=${req.params.id}`)
        .then(function (recordset) {
            res.status(200);
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var user = req.body.basic;
    var regions = req.body.regions;
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("UserName", user.UserName);
                request.input("LoginName", user.LoginName);
                request.input("UserPass", user.UserPass);
                request.input("JobClass", user.JobClass);
                request.input("DirectManager", user.DirectManager);
                request.input("Email", user.Email);
                request.input("Phone", user.Phone);
                request.input("SalesLineID", user.SalesLineID);
                request.execute("UserInsert")
                    .then(function (recordset, returnValue, affected) {
                        // res.json({ recordset: recordset[0], returnValue: returnValue, affected: affected });
                        userID = recordset[0][0].UserID;

                        promises.push(Promise.map(regions, function (region) {
                            var request = trans.request();
                            request.input("RegionID", region.RegionID);
                            request.input("UserID", userID);
                            return request.execute("UserRegionInsert")
                        }));

                        Promise.all(promises)
                            .then(function (recordset) {
                                trans.commit().then(function () {
                                    res.json({ returnValue: 1, affected: 1 });
                                }).catch(function (err) {
                                    trans.rollback();
                                    res.json({ error: err }); console.log(err);
                                })
                            }).catch(function (err) {
                                trans.rollback();
                                console.log('Transaction Rolled Back');
                                res.json({ error: err }); console.log(err);
                            })

                    }).catch(function (err) {
                        trans.rollback();
                        res.json({ error: err }); console.log(err);
                    })
            }).catch(function (err) {
                trans.rollback();
                res.json({ error: err }); console.log(err);
            })
    }).catch(function (err) {
        res.json({ error: err }); console.log(err); connection.close();
    })
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var user = req.body.basic;
    var regions = req.body.regions;
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("UserID", req.params.id);
                request.input("UserName", user.UserName);
                request.input("LoginName", user.LoginName);
                request.input("UserPass", user.UserPass);
                request.input("JobClass", user.JobClass);
                request.input("DirectManager", user.DirectManager);
                request.input("Email", user.Email);
                request.input("Phone", user.Phone);
                request.input("SalesLineID", user.SalesLineID);
                request.execute("UserUpdate")
                    .then(function (recordset, returnValue, affected) {
                        console.log('User Updated');

                        var request = trans.request();
                        request.input("UserID", req.params.id);
                        promises.push(request.execute("UserRegionDelete"))

                        promises.push(Promise.map(regions, function (region) {
                            var request = trans.request();
                            request.input("RegionID", region.RegionID);
                            request.input("UserID", req.params.id);
                            return request.execute("UserRegionInsert")
                        }));

                        Promise.all(promises)
                            .then(function (recordset) {
                                trans.commit().then(function () {
                                    connection.close();
                                    res.json({ returnValue: 1, affected: 1 });
                                }).catch(function (err) {
                                    trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                                })
                            }).catch(function (err) {
                                console.log('Transaction Rolled Back: Promise');
                                trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                            })
                    }).catch(function (err) {
                        trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                    });
            }).catch(function (err) {
                trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
            });
    }).catch(function (err) {
        res.json({ error: err }); console.log(err); connection.close();
    })
});


router.put('/Approve/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    var data = req.body;
    request.input("UserID", data.id);
    request.input("ApproveUser", data.appuser);
    request.execute("UserApprove", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/Disable/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    var data = req.body;
    request.input("UserID", req.params.id);
    request.execute("UserDisable", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});
router.put('/ChangePass/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    var data = req.body;
    request.input("UserID", req.params.id);
    request.input("NewPass", data.UserPass);
    request.execute("UserChangePass", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
})

router.put('/Replace/:id1', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    var data = req.body;
    request.input("UserID1", req.params.id1);
    request.input("UserID2", data.id2);
    request.execute("RotateUserDestination", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
})

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.execute("UserDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.status(200);
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});


router.post('/uploadPhoto/:id', function (req, res, next) {
    var path = '';
    var userid = req.params.id
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        // No error occured.
        path = req.file.path;
        // console.log(req.file.buffer.toString('base64'))
        // console.log(req.file.buffer)
        var buffer = req.file.buffer;
        res.setHeader('Content-Type', 'application/json');
        var request = new sql.Request(sqlConn);
        var data = req.body;
        request.input("UserID", userid);
        request.input("UserPhoto", buffer);
        request.execute("UserUploadPhoto", function (err, recordset, returnValue, affected) {
            if (err) { res.json({ error: err }); console.log(err); }
            else {
                // console.log(buffer);
                res.send("Upload Completed for " + path);
            }
        });
    });
})

module.exports = router;
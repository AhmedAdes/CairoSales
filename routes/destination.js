/*
 * Medical Specification Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.vwDestinations")
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/:id(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.vwDestinations Where DestID= ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/region/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.vwDestinations Where RegionID= ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/userChain/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    // request.input("UserID", req.params.id);
    request.query(`SELECT DISTINCT d.* FROM dbo.vwDestinations d
                JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID
                AND ud.UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/userChainCount/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    // request.input("UserID", req.params.id);
    request.query(`SELECT ISNULL(COUNT(DISTINCT d.DestID), 0) AS DestCount FROM dbo.vwDestinations d
                JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID
                AND ud.UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/userNotAssigned/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    // request.input("UserID", req.params.id);
    request.query(`SELECT * FROM dbo.vwDestinations ds 
                WHERE IMSID IN (SELECT DISTINCT IMSID FROM dbo.UserDestinations ud JOIN dbo.Destinations d ON ud.DestID = d.DestID WHERE UserID = ${req.params.id})
                AND ds.DestID NOT IN (SELECT DestID FROM dbo.UserDestinations ud WHERE UserID = ${req.params.id})`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/aprvregion/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.vwDestinations Where RegionID= ${req.params.id} And Approved = 1`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/planAprvRegion/:id.:userID.:visitDate', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("RegionID", req.params.id);
    request.input("UserID", req.params.userID);
    request.input("VisitDate", req.params.visitDate);
    request.execute(`procGetUserPlanRegionDestinations`)
        .then(function (recordset) { res.json(recordset) })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
})
router.get('/checkMaxVisit/:destID.:userID.:visitDate', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input('DestID', req.params.destID)
    request.input("UserID", req.params.userID);
    request.input("VisitDate", req.params.visitDate);
    request.execute(`ProcChechMaxVisits`) //'12-2016'
        .then(function (recordset) { res.json(recordset[0]); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
})
router.get('/destUsers/:destID', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.destID);
    request.execute(`procGetDestinationUsers`)
        .then(function (recordset) { res.json(recordset) })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
})
router.get('/AlldestUsers', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT DISTINCT s.SalesLineID, LineName, u.UserID, u.UserName, CAST(0 AS BIT) selected FROM dbo.Users u
                    JOIN dbo.SalesLines s ON u.SalesLineID = s.SalesLineID AND u.JobClass = 'Medical Rep.'
                    LEFT JOIN dbo.UserDestinations ud ON u.UserID = ud.UserID`)
        .then(function (recordset) { res.json(recordset) })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
})
router.get('/getUserHospitals/:userId', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.userId);
    request.execute(`procGetUserHospitals`)
        .then(function (recordset) { res.json(recordset) })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
})
router.get('/getHospitalDoctors/:destID', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.destID);
    request.execute(`procGetHospitalDoctors`)
        .then(function (recordset) { res.json(recordset) })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
})
router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var dest = req.body.dst;
    // console.log(dest)
    var users = req.body.users;
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("Destination", dest.Destination);
                request.input("DestType", dest.DestType);
                request.input("Address", dest.Address);
                request.input("RegionID", dest.RegionID);
                request.input("MedSpecID", dest.MedSpecID);
                request.input("VisitImpID", dest.VisitImpID);
                request.input("CreateUser", dest.CreateUser);
                request.input("IMSID", dest.IMSID);
                request.input("Email", dest.Email);
                request.input("Mobile", dest.Mobile);
                request.input("WhatsAppNo", dest.WhatsAppNo);
                request.input("ClinicTel", dest.ClinicTel);
                request.input("ClinicTimes", dest.ClinicTimes);
                request.input("TeachingUniv", dest.TeachingUniv);
                request.input("ProfTitle", dest.ProfTitle);
                request.input("City", dest.City);
                request.input("Street", dest.Street);
                request.input("Building", dest.Building);
                request.input("Floor", dest.Floor);
                request.input("Flat", dest.Flat);
                request.input("GPSLoclat", sql.Decimal(12, 9), dest.GPSLoclat);
                request.input("GPSLoclng", sql.Decimal(12, 9), dest.GPSLoclng);
                request.execute("DestinationInsert")
                    .then(function (recordset) {
                        destID = recordset[0][0].DestID;
                        promises.push(Promise.map(users, function (user) {
                            var request = trans.request();
                            request.input("DestID", destID);
                            request.input("UserID", user.UserID);
                            return request.execute("UserDestinationInsert")
                        }));

                        Promise.all(promises)
                            .then(function (recordset) {
                                trans.commit().then(function (recordset) {
                                    res.json({ set: { DestID: destID }, returnValue: 1, affected: 1 });
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
    var dest = req.body.dst;
    console.log(dest)
    var users = req.body.users;
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("DestID", req.params.id);
                request.input("Destination", dest.Destination);
                request.input("DestType", dest.DestType);
                request.input("Address", dest.Address);
                request.input("RegionID", dest.RegionID);
                request.input("MedSpecID", dest.MedSpecID);
                request.input("VisitImpID", dest.VisitImpID);
                request.input("CreateUser", dest.CreateUser);
                request.input("IMSID", dest.IMSID);
                request.input("Email", dest.Email);
                request.input("Mobile", dest.Mobile);
                request.input("WhatsAppNo", dest.WhatsAppNo);
                request.input("ClinicTel", dest.ClinicTel);
                request.input("ClinicTimes", dest.ClinicTimes);
                request.input("TeachingUniv", dest.TeachingUniv);
                request.input("ProfTitle", dest.ProfTitle);
                request.input("City", dest.City);
                request.input("Street", dest.Street);
                request.input("Building", dest.Building);
                request.input("Floor", dest.Floor);
                request.input("Flat", dest.Flat);
                request.input("GPSLoclat", sql.Decimal(12, 9), dest.GPSLoclat);
                request.input("GPSLoclng", sql.Decimal(12, 9), dest.GPSLoclng);
                request.execute("DestinationUpdate")
                    .then(function (recordset) {

                        var request = trans.request();
                        request.input("DestID", req.params.id);
                        promises.push(request.execute("UserDestinationDelete"))

                        promises.push(Promise.map(users, function (user) {
                            var request = trans.request();
                            request.input("DestID", user.DestID);
                            request.input("UserID", user.UserID);
                            return request.execute("UserDestinationInsert")
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
router.put('/DestOnly/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var dest = req.body.dst;
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.id);
    request.input("Destination", dest.Destination);
    request.input("DestType", dest.DestType);
    request.input("Address", dest.Address);
    request.input("RegionID", dest.RegionID);
    request.input("MedSpecID", dest.MedSpecID);
    request.input("VisitImpID", dest.VisitImpID);
    request.input("CreateUser", dest.CreateUser);
    request.input("IMSID", dest.IMSID);
    request.input("Email", dest.Email);
    request.input("Mobile", dest.Mobile);
    request.input("WhatsAppNo", dest.WhatsAppNo);
    request.input("ClinicTel", dest.ClinicTel);
    request.input("ClinicTimes", dest.ClinicTimes);
    request.input("TeachingUniv", dest.TeachingUniv);
    request.input("ProfTitle", dest.ProfTitle);
    request.input("City", dest.City);
    request.input("Street", dest.Street);
    request.input("Building", dest.Building);
    request.input("Floor", dest.Floor);
    request.input("Flat", dest.Flat);
    request.input("GPSLoclat", sql.Decimal(12, 9), dest.GPSLoclat);
    request.input("GPSLoclng", sql.Decimal(12, 9), dest.GPSLoclng);
    request.execute("DestinationUpdate")
        .then(function () { res.json({ returnValue: 1, affected: 1 }); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.put('/RemoveRequest/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.id);
    request.input("UserID", req.body.userID);
    request.execute("DestinationRemoveRequest")
        .then(function () { res.json({ returnValue: 1, affected: 1 }); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.put('/AssignRequest/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.id);
    request.input("UserID", req.body.userID);
    request.execute("DestinationAssignRequest")
        .then(function () { res.json({ returnValue: 1, affected: 1 }); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("DestID", req.params.id);
                request.execute("DestinationDelete")
                    .then(function (recset) {
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
        res.json({ error: err }); console.log(err); connection.close();
    })
});
router.put('/Approve/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var data = req.body;
    var request = new sql.Request(sqlConn);
    request.input("DestID", data.id);
    request.input("ApproveUser", data.appuser);
    request.execute("DestinationApprove")
        .then(function (recset) {
            res.json({ recordset: recset, returnValue: recset.returnValue, affected: recset.returnValue + 1 })
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        });
});
router.put('/GrantRemove/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.id);
    request.input("UserID", req.body.userID);
    request.execute("DestinationGrantRemove")
        .then(function (recset) {
            res.json({ recordset: recset, returnValue: recset.returnValue, affected: recset.returnValue + 1 })
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        });
});
router.put('/GrantAssign/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DestID", req.params.id);
    request.input("UserID", req.body.userID);
    request.execute("DestinationGrantAssign")
        .then(function (recset) {
            res.json({ recordset: recset, returnValue: recset.returnValue, affected: recset.returnValue + 1 })
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        });
});
module.exports = router;
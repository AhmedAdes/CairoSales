var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT  WplanID ,WeekNo ,MonthNo ,StartDate ,w.UserID, u.UserName 
                    FROM dbo.WeekPlan w JOIN dbo.Users u ON w.UserID = u.UserID ORDER BY StartDate DESC`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/:id(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT  WplanID ,WeekNo ,MonthNo ,StartDate ,w.UserID, u.UserName 
                    FROM dbo.WeekPlan w JOIN dbo.Users u ON w.UserID = u.UserID WHERE WplanID = ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/userPlan/:id(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT  WplanID ,WeekNo ,MonthNo ,StartDate ,w.UserID, u.UserName FROM dbo.WeekPlan w 
                    JOIN dbo.Users u ON w.UserID = u.UserID WHERE w.UserID = ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var pln = req.body.basic;
    var dsts = req.body.dsts;
    var WplanID;

    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request(); //PlanName ,FromDate ,ToDate ,SalesLineID 
                request.input("WeekNo", pln.WeekNo);
                request.input("MonthNo", pln.MonthNo);
                request.input("StartDate", pln.StartDate);
                request.input("UserID", pln.UserID);
                request.execute("WeekPlanInsert")
                    .then(function (recordset, returnValue, affected) {
                        WplanID = recordset[0][0].WplanID;
                        console.log('WplanID: ' + WplanID);
                        console.log(dsts);

                        promises.push(Promise.map(dsts, function (dst) {
                            var request = trans.request();
                            request.input("WplanID", WplanID);
                            request.input("DestID", dst.DestID);
                            return request.execute("WeekPlanDestInsert")
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
    var pln = req.body.basic;
    var dsts = req.body.dsts;

    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("WplanID", req.params.id);
                request.input("WeekNo", pln.WeekNo);
                request.input("MonthNo", pln.MonthNo);
                request.input("StartDate", pln.StartDate);
                request.input("UserID", pln.UserID);
                request.execute("WeekPlanUpdate")
                    .then(function (recordset) {
                        console.log('Plan Updated');
                        var request = trans.request();
                        request.input("WplanID", req.params.id);
                        promises.push(request.execute("WeekPlanDestDelete"));

                        promises.push(Promise.map(dsts, function (dst) {
                            var request = trans.request();
                            request.input("WplanID", req.params.id);
                            request.input("DestID", dst.DestID);
                            return request.execute("WeekPlanDestInsert")
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
                        console.log('Transaction Rolled Back: Update');
                        trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                    })
            })
            .catch(function (err) {
                console.log('Transaction Rolled Back: Transaction');
                trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
            });
    }).catch(function (err) {
        res.json({ error: err }); console.log(err); connection.close();
    })
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("WplanID", req.params.id);
    request.execute("WeekPlanDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else { res.json({ returnValue: returnValue, affected: affected }); }
    });
});
module.exports = router;
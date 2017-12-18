/*
 * Medical Visits Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT v.VisitID ,v.VisitDate ,v.DestID ,v.UserID ,v.VisitTime ,v.GeneralComment ,
                        v.VisitType ,v.AccompanyID ,v.CreateDate ,v.HospitalVisit ,v.DoctorName ,v.SpecID, 
                        CASE WHEN v.HospitalVisit = 1 THEN d.Destination + ' - ' + v.DoctorName ELSE d.Destination END Destination, 
                        d.DestType, d.Address, d.RegionID, d.RegionName, d.ProvinceID, 
                        CASE WHEN v.HospitalVisit = 1 THEN (SELECT SpecName FROM dbo.MediSpecification WHERE SpecID = v.SpecID) 
                        ELSE d.SpecName END SpecName, d.ImpName, d.VisitsNo, u.UserName
                    FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID ORDER BY VisitID DESC`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserVisits/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT v.VisitID ,v.VisitDate ,v.DestID ,v.UserID ,v.VisitTime ,v.GeneralComment ,
                        v.VisitType ,v.AccompanyID ,v.CreateDate ,v.HospitalVisit ,v.DoctorName ,v.SpecID, 
                        CASE WHEN v.HospitalVisit = 1 THEN d.Destination + ' - ' + v.DoctorName ELSE d.Destination END Destination, 
                        d.DestType, d.Address, d.RegionID, d.RegionName, d.ProvinceID, 
                        CASE WHEN v.HospitalVisit = 1 THEN (SELECT SpecName FROM dbo.MediSpecification WHERE SpecID = v.SpecID) 
                        ELSE d.SpecName END SpecName, d.ImpName, d.VisitsNo, u.UserName
                    FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
                    WHERE v.UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserVisitsCount/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT ISNULL(COUNT(v.VisitID), 0) AS visCount
                    FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
                    WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(GETDATE(), 'MM-yyyy') 
                    And v.UserID = ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserVisitsDate/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT v.VisitID ,v.VisitDate ,v.DestID ,v.UserID ,v.VisitTime ,v.GeneralComment ,
                        v.VisitType ,v.AccompanyID ,v.CreateDate ,v.HospitalVisit ,v.DoctorName ,v.SpecID, 
                        CASE WHEN v.HospitalVisit = 1 THEN d.Destination + ' - ' + v.DoctorName ELSE d.Destination END Destination, 
                        d.DestType, d.Address, d.RegionID, d.RegionName, d.ProvinceID, 
                        CASE WHEN v.HospitalVisit = 1 THEN (SELECT SpecName FROM dbo.MediSpecification WHERE SpecID = v.SpecID) 
                        ELSE d.SpecName END SpecName, d.ImpName, d.VisitsNo, u.UserName, s.LineName
                    FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID 
                    JOIN dbo.SalesLines s ON u.SalesLineID = s.SalesLineID
                    WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(GETDATE(), 'MM-yyyy') 
                    And v.UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id})) 
                    ORDER BY VisitID DESC`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT v.*, d.Destination, d.DestType, d.Address, d.RegionID, d.RegionName, d.ProvinceID, d.SpecName, d.ImpName, d.VisitsNo, u.UserName
                    FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID Where VisitID= ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/visitCompare/:userID.:visitDate', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.userID);
    request.input("VisitDate", req.params.visitDate);
    request.query(`SELECT  * FROM  dbo.fncVisitComparisonReport(@UserID, @VisitDate)`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var vis = req.body.basic;
    var drugs = req.body.drugs;
    var gifts = req.body.gifts;
    var ansrs = req.body.ansr;
    var visID;
    if (vis.VisitDate > new Date()) {
        res.json({ error: "Visit Date is after today's Date" }); console.log(err);
        return
    } else if (vis.VisitDate < new Date().setDate(new Date().getDate() - 1)) {
        res.json({ error: "Visit Date is before yesterday's Date" }); console.log(err);
        return
    }
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("VisitDate", vis.VisitDate);
                request.input("VisitTime", vis.VisitTime);
                request.input("DestID", vis.DestID);
                request.input("UserID", vis.UserID);
                request.input("GeneralComment", vis.GeneralComment);
                request.input("VisitType", vis.VisitType);
                request.input("AccompanyID", vis.AccompanyID);
                request.input("HospitalVisit", vis.HospitalVisit);
                request.input("DoctorName", vis.DoctorName);
                request.input("SpecID", vis.SpecID);
                request.execute("VisitInsert")
                    .then(function (recordset, returnValue, affected) {
                        visID = recordset[0][0].VisitID;
                        
                        promises.push(Promise.map(drugs, function (drug) {
                            var request = trans.request();
                            request.input("VisitID", visID);
                            request.input("DrugID", drug.DrugID);
                            request.input("Comment", drug.Comment);
                            request.input("Gift", drug.Gift);
                            return request.execute("VisitDrugsInsert")
                        }));

                        if (gifts.length > 0) {
                            promises.push(Promise.map(gifts, function (gift) {
                                var request = trans.request();
                                request.input("VisitID", visID);
                                request.input("ToolID", gift.ToolID);
                                request.input("Quant", gift.Qty);
                                return request.execute("VisitGiftInsert")
                            }));
                        }
                        if (ansrs.length > 0) { //VisitID, DrugID, AnswerID
                            promises.push(Promise.map(ansrs, function (ans) {
                                var request = trans.request();
                                request.input("VisitID", visID);
                                request.input("DrugID", ans.DrugID);
                                request.input("AnswerID", ans.AnswerID);
                                return request.execute("SurveyVisitAnswersInsert")
                            }));
                        }

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
    var vis = req.body.basic;
    var drugs = req.body.drugs;
    var gifts = req.body.gifts;
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("VisitID", req.params.id);
                request.input("VisitDate", vis.VisitDate);
                request.input("VisitTime", vis.VisitTime);
                request.input("DestID", vis.DestID);
                request.input("UserID", vis.UserID);
                request.input("GeneralComment", vis.GeneralComment);
                request.input("VisitType", vis.VisitType);
                request.input("AccompanyID", vis.AccompanyID);
                request.input("HospitalVisit", vis.HospitalVisit);
                request.input("DoctorName", vis.DoctorName);
                request.input("SpecID", vis.SpecID);
                request.execute("VisitsUpdate")
                    .then(function (recordset) {
                        console.log('Visit Updated');
                        var request = trans.request();
                        request.input("VisitID", req.params.id);
                        promises.push(request.execute("VisitDrugsDelete"));
                        var request = trans.request();
                        request.input("VisitID", req.params.id);
                        promises.push(request.execute("VisitGiftDelete"));
                        var request = trans.request();
                        request.input("VisitID", req.params.id);
                        promises.push(request.execute("SurveyVisitAnswersDelete"));

                        promises.push(Promise.map(drugs, function (drug) {
                            var request = trans.request();
                            request.input("VisitID", req.params.id);
                            request.input("DrugID", drug.DrugID);
                            request.input("Comment", drug.Comment);
                            request.input("Gift", drug.Gift);
                            return request.execute("VisitDrugsInsert")
                        }));

                        if (gifts.length > 0) {
                            promises.push(Promise.map(gifts, function (gift) {
                                var request = trans.request();
                                request.input("VisitID", req.params.id);
                                request.input("ToolID", gift.ToolID);
                                request.input("Quant", gift.Qty);
                                return request.execute("VisitGiftInsert")
                            }));
                        }
                        if (ansrs.length > 0) {
                            promises.push(Promise.map(ansrs, function (ans) {
                                var request = trans.request();
                                request.input("VisitID", req.params.id);
                                request.input("DrugID", ans.DrugID);
                                request.input("AnswerID", ans.AnswerID);
                                return request.execute("SurveyVisitAnswersInsert")
                            }));
                        }
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
    request.input("VisitID", req.params.id);
    request.execute("VisitDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else { res.json({ returnValue: returnValue, affected: affected }); }
    });
});
module.exports = router;
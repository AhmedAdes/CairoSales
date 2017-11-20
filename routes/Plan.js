var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT PlanID ,PlanName ,FromDate ,ToDate ,p.SalesLineID ,LineName 
                    FROM dbo.MonthPlan p JOIN dbo.SalesLines s ON p.SalesLineID = s.SalesLineID ORDER BY PlanID DESC`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/:id(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT  PlanID ,PlanName ,FromDate ,ToDate ,p.SalesLineID ,LineName FROM dbo.MonthPlan p
                    JOIN dbo.SalesLines s ON p.SalesLineID = s.SalesLineID WHERE PlanID = ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/userPlan/:id(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.MonthPlan p WHERE p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = ${req.params.id})`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/planDetails', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.multiple = true;
    request.query(`
SELECT s.SpecID, SpecName, CAST(1 as Bit) Checked FROM dbo.MediSpecification s ;
SELECT s.DrugID, DrugName, SalesLineID, CAST(1 as Bit) Checked FROM dbo.Drugs s ;
SELECT s.ImpID, ImpName, CAST(1 as Bit) Checked FROM dbo.VisitImportance s ;`,
        function (err, recordsets, affected) {
            if (err) { res.json({ error: err }); console.log(err); }
            res.json({ specs: recordsets[0], drgs: recordsets[1], imps: recordsets[2] });
        })
    // .then(function (recordsets) {  })
    // .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/PlanDetails/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.multiple = true;
    request.query(`
SELECT s.SpecID, SpecName, PlanID, CAST(PlanID as Bit) Checked FROM dbo.MediSpecification s LEFT JOIN dbo.PlanSpecs p ON s.SpecID = p.SpecID AND PlanID = ${req.params.id};
SELECT s.DrugID, DrugName, SalesLineID, PlanID, CAST(PlanID as Bit) Checked FROM dbo.Drugs s LEFT JOIN dbo.PlanDrugs p ON s.DrugID = p.DrugID AND PlanID = ${req.params.id};
SELECT s.ImpID, ImpName, PlanID, CAST(PlanID as Bit) Checked FROM dbo.VisitImportance s LEFT JOIN dbo.PlanImp p ON s.ImpID = p.ImpID AND PlanID = ${req.params.id};`,
        function (err, recordsets, affected) {
            if (err) { res.json({ error: err }); console.log(err); }
            res.json({ specs: recordsets[0], drgs: recordsets[1], imps: recordsets[2] });
        })
    // .then(function (recordset) { res.json(recordset); })
    // .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var pln = req.body.basic;
    var specs = req.body.specs;
    var drugs = req.body.drugs;
    var imps = req.body.imps;
    var planID;

    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request(); //PlanName ,FromDate ,ToDate ,SalesLineID 
                request.input("PlanName", pln.PlanName);
                request.input("FromDate", pln.FromDate);
                request.input("ToDate", pln.ToDate);
                request.input("SalesLineID", pln.SalesLineID);
                request.execute("MonthPlanInsert")
                    .then(function (recordset, returnValue, affected) {
                        planID = recordset[0][0].PlanID;
                        console.log('PlanID: ' + planID);

                        promises.push(Promise.map(specs, function (spec) {
                            var request = trans.request();
                            request.input("PlanID", planID);
                            request.input("SpecID", spec.SpecID);
                            return request.execute("PlanSpecsInsert")
                        }));

                        promises.push(Promise.map(drugs, function (drug) {
                            var request = trans.request();
                            request.input("PlanID", planID);
                            request.input("DrugID", drug.DrugID);
                            return request.execute("PlanDrugsInsert")
                        }));

                        promises.push(Promise.map(imps, function (imp) {
                            var request = trans.request();
                            request.input("PlanID", planID);
                            request.input("ImpID", imp.ImpID);
                            return request.execute("PlanImportanceInsert")
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
    var specs = req.body.specs;
    var drugs = req.body.drugs;
    var imps = req.body.imps;

    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("PlanID", req.params.id);
                request.input("PlanName", pln.PlanName);
                request.input("FromDate", pln.FromDate);
                request.input("ToDate", pln.ToDate);
                request.input("SalesLineID", pln.SalesLineID);
                request.execute("MonthPlanUpdate")
                    .then(function (recordset) {
                        console.log('Plan Updated');
                        var request = trans.request();
                        request.input("PlanID", req.params.id);
                        promises.push(request.execute("PlanSpecsDelete"));
                        var request = trans.request();
                        request.input("PlanID", req.params.id);
                        promises.push(request.execute("PlanImportanceDelete"));
                        var request = trans.request();
                        request.input("PlanID", req.params.id);
                        promises.push(request.execute("PlanDrugsDelete"));

                        promises.push(Promise.map(specs, function (spec) {
                            var request = trans.request();
                            request.input("PlanID", req.params.id);
                            request.input("SpecID", spec.SpecID);
                            return request.execute("PlanSpecsInsert")
                        }));

                        promises.push(Promise.map(drugs, function (drug) {
                            var request = trans.request();
                            request.input("PlanID", req.params.id);
                            request.input("DrugID", drug.DrugID);
                            return request.execute("PlanDrugsInsert")
                        }));

                        promises.push(Promise.map(imps, function (imp) {
                            var request = trans.request();
                            request.input("PlanID", req.params.id);
                            request.input("ImpID", imp.ImpID);
                            return request.execute("PlanImportanceInsert")
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
    request.input("PlanID", req.params.id);
    request.execute("MonthPlanDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else { res.json({ returnValue: returnValue, affected: affected }); }
    });
});
module.exports = router;
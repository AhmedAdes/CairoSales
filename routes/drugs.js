/*
 * Medical Specification Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT d.*, s.LineName FROM dbo.Drugs d JOIN dbo.SalesLines s ON d.SalesLineID = s.SalesLineID")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT d.*, s.LineName FROM dbo.Drugs d JOIN dbo.SalesLines s ON d.SalesLineID = s.SalesLineID Where d.DrugID=${req.params.id}`)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/PlanDrugs/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id)
    request.execute("procGetUserPlanDrugs")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var drug = req.body;
    var request = new sql.Request(sqlConn);
    request.input("DrugName", drug.DrugName);
    request.input("Description", drug.Description);
    request.input("SalesLineID", drug.SalesLineID);
    request.execute("DrugInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var drug = req.body;
    var request = new sql.Request(sqlConn);
    request.input("DrugID", req.params.id);
    request.input("DrugName", drug.DrugName);
    request.input("Description", drug.Description);
    request.input("SalesLineID", drug.SalesLineID);
    request.execute("DrugUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("DrugID", req.params.id);
    request.execute("DrugDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

module.exports = router;
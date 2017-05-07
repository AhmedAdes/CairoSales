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
    request.query("SELECT * FROM dbo.VisitImportance")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.VisitImportance Where ImpID=" + req.params.id)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var imp = req.body;
    var request = new sql.Request(sqlConn);
    request.input("ImpName", imp.ImpName);
    request.input("VisitsNo", imp.VisitsNo);
    request.execute("VisitImportanceInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var imp = req.body;
    var request = new sql.Request(sqlConn);
    request.input("ImpID", req.params.id);
    request.input("ImpName", imp.ImpName);
    request.input("VisitsNo", imp.VisitsNo);
    request.execute("VisitImportanceUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("ImpID", req.params.id);
    request.execute("VisitImportanceDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

module.exports = router;
/*
 * Vacation Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.vwVacation")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
router.get('/getUserVacations/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.vwVacation Where UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.vwVacation Where VacID=" + req.params.id)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var vac = req.body;
    var request = new sql.Request(sqlConn);
    request.input("VacType", vac.VacType);
    request.input("UserID", vac.UserID);
    request.input("Notes", vac.Notes);
    request.input("FromDate", vac.FromDate);
    request.input("ToDate", vac.ToDate);
    request.execute("VacationInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var vac = req.body;
    var request = new sql.Request(sqlConn);
    request.input("VacID", req.params.id);
    request.input("VacType", vac.VacType);
    request.input("UserID", vac.UserID);
    request.input("Notes", vac.Notes);
    request.input("FromDate", vac.FromDate);
    request.input("ToDate", vac.ToDate);
    request.execute("VacationUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("VacID", req.params.id);
    request.execute("VacationDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

module.exports = router;
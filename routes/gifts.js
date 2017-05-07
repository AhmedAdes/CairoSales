/*
 * Gifts Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.Gifts")
        .then(function (recordset) {
            res.status(200);
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.Gifts Where GiftID=" + req.params.id)
        .then(function (recordset) {
            res.status(200);
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var gift = req.body;
    var request = new sql.Request(sqlConn);
    request.input("GiftName", gift.GiftName);
    request.execute("GiftInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.status(200);
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var gift = req.body;
    var request = new sql.Request(sqlConn);
    request.input("GiftID", req.params.id);
    request.input("GiftName", gift.GiftName);
    request.execute("GiftUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.status(200);
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("GiftID", req.params.id);
    request.execute("GiftDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.status(200);
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

module.exports = router;
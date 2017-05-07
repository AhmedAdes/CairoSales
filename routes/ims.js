/*
 * GET IMSData listing.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var con = require('../SQLconfig');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.IMSData")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.IMSData WHERE IMSID =" + req.params.id)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
router.get('/UserIMS/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.execute("procUserIMS")
        .then(function (recordset) {
            res.json(recordset[0]);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var user = req.body;
    var request = new sql.Request(sqlConn);
    request.input("IMS", user.IMS);
    request.execute("IMSDataInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var user = req.body;
    var request = new sql.Request(sqlConn);
    request.input("IMSID", req.params.id);
    request.input("IMS", user.IMS);
    request.execute("IMSDataUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("IMSID", req.params.id);
    request.execute("IMSDataDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

module.exports = router;
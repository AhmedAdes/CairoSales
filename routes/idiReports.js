var express = require('express');
var router = express.Router();
var sql = require('mssql');

var con = require('../SQLConfig');
var sqlConn = new sql.Connection(con.IDIConfig);
sqlConn.connect();

sqlConn.on('error', function (err) {
    console.log('Sql Connection Error.', err);
});

// var Promise = require('bluebird');

router.get('/stillInProduction/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
        var request = new sql.Request(sqlConn);
        request.query(`SELECT SemiCode,CompanyCode,Company,ProductName,BatchNo,RequiredBox,RequiredTab FROM PL.FncProductstillInProduction(GETDATE()) WHERE CompanyCode IN ('01','02','03','12')`)
            .then(function (recordset) { res.json(recordset);})
            .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/stillInProduction/:compID', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
        var request = new sql.Request(sqlConn);
        request.query(`SELECT SemiCode,CompanyCode,Company,ProductName,BatchNo,RequiredBox,RequiredTab FROM PL.FncProductstillInProduction(GETDATE()) WHERE CompanyCode = '${req.params.compID}' `)
            .then(function (recordset) { res.json(recordset); })
            .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/finishBalance/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
        var request = new sql.Request(sqlConn);
        request.query(`SELECT * FROM WH.vwFinishedStoreBalance `)
            .then(function (recordset) { res.json(recordset); })
            .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/QBalance/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
        var request = new sql.Request(sqlConn);
        request.query(`SELECT * FROM WH.QuarantineBalance `)
            .then(function (recordset) { res.json(recordset); })
            .catch(function (err) { res.json({ error: err }); console.log(err); })
});

module.exports = router;
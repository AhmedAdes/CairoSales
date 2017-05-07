/*
 * GET Region listing.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.Regions")
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT * FROM dbo.Regions Where RegionID=" + req.params.id)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/province/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.Regions Where ProvinceID='${req.params.id}'`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/aprvprovince/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.Regions Where ProvinceID='${req.params.id}' And Approved = 1`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/userChain/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT DISTINCT r.* FROM dbo.Regions r JOIN dbo.Destinations d ON r.RegionID = d.RegionID
        JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID AND 
        UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var region = req.body;
    var request = new sql.Request(sqlConn);
    request.input("RegionName", region.RegionName);
    request.input("ProvinceID", region.ProvinceID);
    request.execute("RegionsInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ recordset: recordset, returnValue: returnValue, affected: affected });
            console.log({ recordset: recordset, returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var region = req.body;
    var request = new sql.Request(sqlConn);
    request.input("RegionID", req.params.id);
    request.input("RegionName", region.RegionName);
    request.input("ProvinceID", region.ProvinceID);
    request.execute("RegionsUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("RegionID", req.params.id);
    request.execute("RegionsDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/Approve/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var data = req.body;
    var request = new sql.Request(sqlConn);
    request.input("RegionID", data.id);
    request.input("ApproveUser", data.appuser);
    request.execute("RegionApprove")
        .then(function (recset) {
            res.json({ recordset: recset, returnValue: recset.returnValue, affected: recset.returnValue + 1 })
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        });
});

module.exports = router;
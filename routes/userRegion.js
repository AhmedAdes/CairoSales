/*
 * GET User Region listing.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT ur.RegionID,r.RegionName,r.ProvinceID FROM dbo.UserRegions ur Join dbo.Regions r on ur.RegionID = r.RegionID")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
// router.get('/userchain/:id', function (req, res, next) {
//     res.setHeader('Content-Type', 'application/json');
//     var request = new sql.Request(sqlConn);
//     request.query(`SELECT DISTINCT ur.RegionID,r.RegionName,r.ProvinceID 
//                     FROM dbo.UserRegions ur Join dbo.Regions r on ur.RegionID = r.RegionID 
//                     Where UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
//         .then(function (recordset) {
//             res.json(recordset);
//         }).catch(function (err) {
//             if (err) { res.json({ error: err }); console.log(err); }
//         })
// });
router.get('/userchain/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT DISTINCT d.RegionID,r.RegionName,r.ProvinceID 
                     FROM dbo.UserDestinations ur JOIN dbo.Destinations d ON ur.DestID = d.DestID JOIN dbo.Regions r on d.RegionID = r.RegionID 
                     Where UserID IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id}))`)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            res.json({ error: err }); console.log(err);
        })
})

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT ur.RegionID,r.RegionName,r.ProvinceID FROM dbo.UserRegions ur 
                    Join dbo.Regions r on ur.RegionID = r.RegionID Where UserID=${req.params.id}`)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var region = req.body;
    var request = new sql.Request(sqlConn);
    request.input("RegionID", region.RegionID);
    request.input("UserID", region.UserID);
    request.execute("UserRegionInsert")
        .then(function (recordset, returnValue, affected) {
            res.json({ returnValue: recordset.returnValue, affected: recordset.returnValue + 1 });
            console.log({ recordset: recordset, returnValue: returnValue, affected: affected });
        }).catch(function (err) {
            res.json({ error: err.message }); console.log(err);
        })
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.execute("UserRegionDelete")
        .then(function (recordset, returnValue, affected) {
            res.json({ returnValue: recordset.returnValue, affected: recordset.returnValue + 1 });
        }).catch(function (err) {
            res.json({ error: err.message }); console.log(err);
        })
});

module.exports = router;
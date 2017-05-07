/*
 * GET Visit Gifts listing.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT  VisitID, vd.ToolID, ToolName, Qty, g.GiftID, g.GiftName FROM dbo.VisitGifts vd 
JOIN dbo.PromoTools d ON vd.ToolID = d.ToolID  JOIN dbo.Gifts g ON d.GiftID = g.GiftID Where VisitID= ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var vis = req.body;
    var request = new sql.Request(sqlConn);
    request.input("VisitID", vis.VisitID);
    request.input("ToolID", vis.ToolID);
    request.input("Quant", vis.Qty);
    request.execute("VisitGiftInsert")
        .then(function (recordset, returnValue, affected) {
            res.json({ returnValue: recordset.returnValue, affected: recordset.returnValue + 1 });
        }).catch(function (err) {
            res.json({ error: err.message }); console.log(err);
        })
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("VisitID", req.params.id);
    request.execute("VisitGiftDelete")
        .then(function (recordset, returnValue, affected) {
            res.json({ returnValue: recordset.returnValue, affected: recordset.returnValue + 1 });
        }).catch(function (err) {
            res.json({ error: err.message }); console.log(err);
        })
});


module.exports = router;
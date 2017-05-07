/*
 * GET User Region listing.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT  VisitID ,vd.DrugID ,Comment ,Gift ,DrugName ,Description FROM dbo.VisitDrugs vd 
                    JOIN dbo.Drugs d ON vd.DrugID = d.DrugID Where VisitID= ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var vis = req.body; //VisitID, DrugID, Comment, Gift
    var request = new sql.Request(sqlConn);
    request.input("VisitID", vis.VisitID);
    request.input("DrugID", vis.DrugID);
    request.input("Comment", vis.Comment);
    request.input("Gift", vis.Gift);
    request.execute("VisitDrugsInsert")
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
    request.execute("VisitDrugsDelete")
        .then(function (recordset, returnValue, affected) {
            res.json({ returnValue: recordset.returnValue, affected: recordset.returnValue + 1 });
        }).catch(function (err) {
            res.json({ error: err.message }); console.log(err);
        })
});


module.exports = router;
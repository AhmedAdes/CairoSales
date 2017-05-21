var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

router.get('/visitCompare/:userID.:visitDate', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.userID);
    request.input("VisitDate", req.params.visitDate);
    request.query(`SELECT  * FROM  dbo.fncVisitComparisonReport(@UserID, @VisitDate)`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/specVisits/:specID.:from.:to.:imsID', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("SpecID", req.params.specID);
    request.input("From", req.params.from);
    request.input("To", req.params.to);
    var str = `SELECT ISNULL(s.SpecName, 'N/A') SpecName,ISNULL(COUNT(VisitID), 0) VisCount FROM dbo.Visits v JOIN dbo.Destinations d ON v.DestID = d.DestID 
                JOIN dbo.MediSpecification s ON d.MedSpecID = s.SpecID WHERE CAST(v.VisitDate AS DATE) BETWEEN @From AND @To 
                AND s.SpecID = @SpecID `
    if (req.params.imsID != 'null') {
        str += `AND IMSID = @IMSID`
        request.input("IMSID", req.params.imsID);
    }
    str += ` GROUP BY SpecName`
    request.query(str)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/promoPeriod/:from.:to.:imsID', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("From", req.params.from);
    request.input("To", req.params.to);
    var str = `SELECT g.GiftName, pt.ToolName, SUM(vg.Qty) Qty FROM dbo.VisitGifts vg JOIN dbo.PromoTools pt ON vg.ToolID = pt.ToolID 
                JOIN dbo.Gifts g ON pt.GiftID = g.GiftID JOIN dbo.Visits v ON vg.VisitID = v.VisitID 
                WHERE v.VisitDate BETWEEN @From AND @To `
    if (req.params.imsID != 'null') {
        str += `AND v.DestID IN (SELECT DestID FROM dbo.Destinations WHERE IMSID = @IMSID)`
        request.input("IMSID", req.params.imsID);
    }
    str += ` GROUP BY g.GiftName, pt.ToolName`
    request.query(str)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/drugAnalysis/:from.:to.:drugId.:rpttype.:crt', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("FromDate", req.params.from);
    request.input("ToDate", req.params.to);
    request.input("DrugID", req.params.drugId);
    var str = `SELECT * From fncDrugAnalysis(@FromDate, @ToDate, @DrugID) `
    switch (req.params.rpttype) {
        case 'Comments':
            str += ` Where Comment IS NOT NULL`
            console.log(req.params.crt)
            if (req.params.crt != 'null') {
                console.log(req.params.crt)
                str += ` And IMSID = @IMSID`
                request.input("IMSID", req.params.crt);
            }
            break;
        case 'IMS':
            str += ` Where IMSID = @IMSID`
            request.input("IMSID", req.params.crt);
            break;
        case 'Dest':
            str += ` Where DestID = @DestID`
            request.input("DestID", req.params.crt);
            break;
        case 'Specs':
            str += ` Where MedSpecID = @SpecID`
            request.input("SpecID", req.params.crt);
            break;
        default:
            break;
    }
    request.query(str)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/drugPromoAnalysis/:from.:to.:drugId.:rpttype.:crt', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("FromDate", req.params.from);
    request.input("ToDate", req.params.to);
    request.input("DrugID", req.params.drugId);
    request.query(`SELECT * From fncDrugPromoAnalysis(@FromDate, @ToDate, @DrugID) `)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserVisitRate/:id/:month', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // var user = req.params.id;
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.input("Month", req.params.month);
    request.execute("prcUserMonthVisitsReport")
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
module.exports = router;
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/UserSchedule/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.vwVisitSchedule WHERE DestID IN (SELECT DestID FROM dbo.UserDestinations WHERE UserID = ${req.params.id})`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserScheduleDate/:id/:date', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.input("VisitDate", req.params.date);
    request.execute("procVisitSchedule")
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserChainSchedule/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT * FROM dbo.vwVisitSchedule WHERE DestID IN (SELECT DestID FROM dbo.UserDestinations WHERE UserID 
                    IN (SELECT ${req.params.id} UNION SELECT UserID FROM dbo.fncUserChain(${req.params.id})))`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserVisitRate/:id/:visDate', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // var user = req.params.id;
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.input("VisitDate", req.params.visDate);
    request.execute("prcUserMonthVisitsReport")
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/UserChainVisitRate/:id/:month', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // var user = req.body;
    var request = new sql.Request(sqlConn);
    request.input("UserID", req.params.id);
    request.input("Month", req.params.month);
    request.execute("prcUserChainMonthVisitsReport")
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/userVisitCounts/:id', function(req,res,next){
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.multiple = true;
    request.query(`
        SELECT ISNULL(visCount, 0)visCount FROM fncMonthChainPlannedVisits(${req.params.id});
        SELECT ISNULL(visCount, 0)visCount FROM fncMonthChainVisitCount(${req.params.id});
        SELECT ISNULL(visCount, 0)visCount FROM fncTodayChainVisitCount(${req.params.id});
        SELECT ISNULL(promoCount, 0)promoCount FROM fncMonthChainPromoCount(${req.params.id});
    `, function (err, recordsets, affected) {
            if (err) { res.json({ error: err }); console.log(err); }
            res.json({ planned: recordsets[0], committed: recordsets[1], today: recordsets[2], promo: recordsets[3] });
        })
});
router.get('/TopUsers/:from/:to/:lineid', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // var user = req.params.id;
    var request = new sql.Request(sqlConn);
    request.input("FromDate", req.params.from);
    request.input("ToDate", req.params.to);
    request.input("LineID", req.params.lineid);
    request.query(`SELECT TOP 3 *, (SELECT dbo.fncUserIMS(m.UserID)) IMS 
                    From fncMedRepReport(@FromDate, @ToDate, @LineID) m ORDER BY ComVisitPrcnt DESC`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

module.exports = router;
/*
 * ContactUS Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT c.*, u.UserName FROM dbo.ContactUs c Join dbo.Users u On c.UserID = u.UserID")
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT c.*, u.UserName FROM dbo.ContactUs c Join dbo.Users u On c.UserID = u.UserID Where ID=" + req.params.id)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});
router.get('/UserMessages/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query("SELECT c.*, u.UserName FROM dbo.ContactUs c Join dbo.Users u On c.UserID = u.UserID Where c.UserID=" + req.params.id)
        .then(function (recordset) {
            res.json(recordset);
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var cntct = req.body;
    var request = new sql.Request(sqlConn);
    request.input("UserID", cntct.UserID);
    request.input("IssueType", cntct.IssueType);
    request.input("Title", cntct.Title);
    request.input("IDescription", cntct.IDescription);
    request.execute("ContactUsInsert", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var cntct = req.body;
    var request = new sql.Request(sqlConn);
    request.input("ID", req.params.id);
    request.input("UserID", cntct.UserID);
    request.input("IssueType", cntct.IssueType);
    request.input("Title", cntct.Title);
    request.input("IDescription", cntct.IDescription);
    request.execute("ContactUsUpdate", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("ID", req.params.id);
    request.execute("ContactUsDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else {
            res.json({ returnValue: returnValue, affected: affected });
        }
    });
});

router.put('/Solve/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var data = req.body;
    var request = new sql.Request(sqlConn);
    request.input("ID", req.params.id);
    request.execute("ContactUsSolve")
        .then(function (recset) {
            res.json({ recordset: recset, returnValue: recset.returnValue, affected: recset.returnValue + 1 })
        }).catch(function (err) {
            if (err) { res.json({ error: err }); console.log(err); }
        });
});
module.exports = router;
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    var user = req.body;
    var request = new sql.Request(sqlConn);
    request.input("LoginName", user.LoginName);
    request.input("UserPass", user.UserPass);
    request.execute("AuthenticateUser")
        .then(function (recordset) {
            res.status(200);
            res.json(recordset);
        }).catch(function (err) {
            res.status(401);
            res.json({ error: err }); console.log(err);
        });
});

router.options('/', function (req, res, next) {
    console.log("writing headers only");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.end('');
});

module.exports = router;
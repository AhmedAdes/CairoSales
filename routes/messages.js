/*
 * Medical Specification Functions.
 */
var express = require("express");
var router = express.Router();
var sql = require("mssql");
var sqlConn = sql.globalConnection;

var firebase = require("firebase");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBKLexkyWvx0ipl3kGZ4gNRHAp9ddwfkUo",
  authDomain: "cairosales-aa702.firebaseapp.com",
  databaseURL: "https://cairosales-aa702.firebaseio.com",
  projectId: "cairosales-aa702",
  storageBucket: "",
  messagingSenderId: "908456895386"
};
firebase.initializeApp(config);
var database = firebase.database();

router.get("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request
    .query(
      "SELECT m.*, u.UserName AS authorName FROM dbo.UserMessages m JOIN dbo.Users u ON u.UserID = m.authorID"
    )
    .then(function(recordset) {
      res.json(recordset);
    })
    .catch(function(err) {
      if (err) {
        res.json({ error: err });
        console.log(err);
      }
    });
});

router.get("/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request
    .query(
      "SELECT m.*, u.UserName AS authorName FROM dbo.UserMessages m JOIN dbo.Users u ON u.UserID = m.authorID Where ID=" +
        req.params.id
    )
    .then(function(recordset) {
      res.json(recordset);
    })
    .catch(function(err) {
      if (err) {
        res.json({ error: err });
        console.log(err);
      }
    });
});

router.post("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var msg = req.body;
  var request = new sql.Request(sqlConn); //content ,title ,authorID ,createDate ,expireDate
  request.input("title", msg.title);
  request.input("content", msg.content);
  request.input("authorID", msg.authorID);
  request.input("createDate", msg.createDate);
  request.input("expireDate", msg.expireDate);
  request
    .execute("MessageInsert")
    .then(function(recset) {
      var msgID = recset[0][0].ID;
      firebase
        .database()
        .ref("messages/" + msgID)
        .set({
          ID: msgID,
          title: msg.title,
          content: msg.content,
          authorID: msg.authorID,
          authorName: msg.authorName,
          createDate: msg.createDate,
          expireDate: msg.expireDate
        });
      res.json({
        recordset: recset,
        returnValue: recset.returnValue,
        affected: recset.returnValue + 1
      });
    })
    .catch(function(err) {
      if (err) {
        res.json({ error: err });
        console.log(err);
      }
    });
});

router.put("/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var msg = req.body;
  var request = new sql.Request(sqlConn);
  request.input("ID", req.params.id);
  request.input("title", msg.title);
  request.input("content", msg.content);
  request.input("authorID", msg.authorID);
  request.input("createDate", msg.createDate);
  request.input("expireDate", msg.expireDate);
  request
    .execute("MessageUpdate")
    .then(function(recset) {
      firebase
        .database()
        .ref("messages/" + req.params.id)
        .update({
          ID: req.params.id,
          title: msg.title,
          content: msg.content,
          authorID: msg.authorID,
          authorName: msg.authorName,
          createDate: msg.createDate,
          expireDate: msg.expireDate
        });
      res.json({
        recordset: recset,
        returnValue: recset.returnValue,
        affected: recset.returnValue + 1
      });
    })
    .catch(function(err) {
      if (err) {
        res.json({ error: err });
        console.log(err);
      }
    });
});

router.delete("/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request.input("ID", req.params.id);
  request
    .execute("MessageDelete")
    .then(function(recset) {
        firebase.database().ref("messages/" + req.params.id).remove()
      res.json({
        recordset: recset,
        returnValue: recset.returnValue,
        affected: recset.returnValue + 1
      });
    })
    .catch(function(err) {
      if (err) {
        res.json({ error: err });
        console.log(err);
      }
    });
});

module.exports = router;

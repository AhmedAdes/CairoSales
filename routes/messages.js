/*
 * Medical Specification Functions.
 */
var express = require("express");
var router = express.Router();
var sql = require("mssql");
var sqlConn = sql.globalConnection;
var Promise = require("bluebird");

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
router.get("/authorMsgs/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request
    .query(
      "SELECT m.*, u.UserName AS authorName FROM dbo.UserMessages m JOIN dbo.Users u ON u.UserID = m.authorID Where authorID=" +
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
router.get("/userMsgs/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request
    .query(
      `SELECT m.*, u.UserName AS authorName FROM dbo.UserMessages m 
      JOIN dbo.MessageUsers mu ON m.ID = mu.MsgID JOIN dbo.Users u ON m.authorID = u.UserID
      WHERE mu.UserID = ${req.params.id} AND mu.GotIt = 0 AND expireDate > CAST(GETDATE() AS DATE)`
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
router.get("/MsgUsers/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request
    .query(
      `SELECT u.UserID, u.UserName, CAST(ISNULL(mu.MsgID, 0) AS BIT) Checked 
      FROM (SELECT * FROM dbo.fncUserChain((SELECT authorID FROM dbo.UserMessages WHERE ID = ${req
        .params.id}))) u 
      LEFT JOIN dbo.MessageUsers mu ON u.UserID = mu.UserID AND mu.MsgID = ${req
        .params.id}`
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
  var msg = req.body.msg;
  var usrs = req.body.users;

  var conf = require("../SQLConfig");
  var connection = new sql.Connection(conf.config);
  connection
    .connect()
    .then(function() {
      var trans = new sql.Transaction(connection);
      trans
        .begin()
        .then(function() {
          var promises = [];
          var request = trans.request(); //content ,title ,authorID ,createDate ,expireDate
          request.input("title", msg.title);
          request.input("content", msg.content);
          request.input("authorID", msg.authorID);
          request.input("createDate", msg.createDate);
          request.input("expireDate", msg.expireDate);
          request
            .execute("MessageInsert")
            .then(function(recset) {
              var msgID = recset[0][0].ID;
              promises.push(
                Promise.map(usrs, function(user) {
                  var request = trans.request();
                  request.input("ID", msgID);
                  request.input("UserID", user.UserID);
                  return request.execute("MesssageUsersInsert");
                })
              );

              Promise.all(promises)
                .then(function(recordset) {
                  trans
                    .commit()
                    .then(function() {
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
                          expireDate: msg.expireDate,
                          users: usrs.map(user => {
                            return {
                              [user.UserID]: true
                            };
                          })
                        });

                      // firebase.database().ref("users/" + user.UserID).update({
                      //   UserID: user.UserID,
                      //   UserName: user.UserName,
                      // })
                      // firebase.database().ref("users/" + user.UserID + "/messages").update({
                      //    [msgID]: true
                      // })

                      res.json({ returnValue: 1, affected: 1 });
                    })
                    .catch(function(err) {
                      trans.rollback();
                      res.json({ error: err });
                      console.log(err);
                    });
                })
                .catch(function(err) {
                  trans.rollback();
                  console.log("Transaction Rolled Back");
                  res.json({ error: err });
                  console.log(err);
                });
            })
            .catch(function(err) {
              trans.rollback();
              res.json({ error: err });
              console.log(err);
            });
        })
        .catch(function(err) {
          trans.rollback();
          res.json({ error: err });
          console.log(err);
        });
    })
    .catch(function(err) {
      res.json({ error: err });
      console.log(err);
      connection.close();
    });
});
router.put("/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var msg = req.body.msg;
  var usrs = req.body.users;

  var conf = require("../SQLConfig");
  var connection = new sql.Connection(conf.config);
  connection
    .connect()
    .then(function() {
      var trans = new sql.Transaction(connection);
      trans
        .begin()
        .then(function() {
          var promises = [];
          var request = trans.request();
          request.input("ID", req.params.id);
          request.input("title", msg.title);
          request.input("content", msg.content);
          request.input("authorID", msg.authorID);
          request.input("createDate", msg.createDate);
          request.input("expireDate", msg.expireDate);
          request
            .execute("MessageUpdate")
            .then(function(recset) {
              var msgID = req.params.id;

              var request = trans.request();
              request.input("ID", msgID);
              promises.push(request.execute("MessageUsersDelete"));

              promises.push(
                Promise.map(usrs, function(user) {
                  var request = trans.request();
                  request.input("ID", msgID);
                  request.input("UserID", user.UserID);
                  return request.execute("MesssageUsersInsert");
                })
              );

              Promise.all(promises)
                .then(function(recordset) {
                  trans
                    .commit()
                    .then(function() {
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
                          expireDate: msg.expireDate,
                          users: usrs.map(user => {
                            return {
                              [user.UserID]: true
                            };
                          })
                        });

                      res.json({ returnValue: 1, affected: 1 });
                    })
                    .catch(function(err) {
                      trans.rollback();
                      res.json({ error: err });
                      console.log(err);
                    });
                })
                .catch(function(err) {
                  trans.rollback();
                  console.log("Transaction Rolled Back");
                  res.json({ error: err });
                  console.log(err);
                });
            })
            .catch(function(err) {
              trans.rollback();
              res.json({ error: err });
              console.log(err);
            });
        })
        .catch(function(err) {
          trans.rollback();
          res.json({ error: err });
          console.log(err);
        });
    })
    .catch(function(err) {
      res.json({ error: err });
      console.log(err);
      connection.close();
    });
});
router.delete("/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request.input("ID", req.params.id);
  request
    .execute("MessageDelete")
    .then(function(recset) {
      firebase
        .database()
        .ref("messages/" + req.params.id)
        .remove();
      // var ref = firebase.database().ref("users/")
      // ref.once('value').then(function(snapshot) {
      //   snapshot.forEach( function(childSnapshot) {
      //       ref.child(childSnapshot.key + "/messages").child(req.params.id).remove()
      //     })
      // })
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

router.put("/gotIt/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var request = new sql.Request(sqlConn);
  request.input("ID", req.body.msg);
  request.input("UserID", req.body.user);
  request.execute("MessageUpdateGotIt", function (err, recordset, returnValue, affected) {
      if (err) { res.json({ error: err }); console.log(err); }
      else {
        var ref = firebase.database().ref('messages/' + req.body.msg + '/users/')
        ref.once('value').then(function(snapshot) {
          snapshot.forEach( function(childSnapshot) {
              childSnapshot.forEach(function(childchild){
                if (childchild.key == req.body.user) {
                  ref.child(childSnapshot.key).remove()
                }
              })
            })
        })
        res.json({ returnValue: returnValue, affected: affected });
      }
  });
})
module.exports = router;

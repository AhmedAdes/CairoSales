/*
 * Survey Functions.
 */
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sqlConn = sql.globalConnection;
var Promise = require('bluebird');

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT QID ,QText ,Keyword FROM dbo.SurveyQuestions`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT QID ,QText ,Keyword FROM dbo.SurveyQuestions Where QID= ${req.params.id}`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.get('/answers/:all', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.query(`SELECT AnswerID, AnswerText, a.QID, Keyword, QText FROM dbo.SurveyAnswers a JOIN dbo.SurveyQuestions q ON a.QID=q.QID`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/answers/:qID(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("QID", req.params.qID);
    request.query(`SELECT AnswerID, AnswerText, a.QID, Keyword, QText FROM dbo.SurveyAnswers a JOIN dbo.SurveyQuestions q ON a.QID=q.QID Where a.QID=@QID`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});
router.get('/visDrgAns/:visID(\\d+)', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("VisitID", req.params.visID);
    request.query(`SELECT sva.VisitID, sva.DrugID, d.DrugName, sva.AnswerID, a.AnswerText, q.QID, q.QText, q.Keyword 
                FROM dbo.SurveyVisitAnswers sva JOIN dbo.Drugs d ON sva.DrugID = d.DrugID	
                JOIN dbo.SurveyAnswers a ON sva.AnswerID = a.AnswerID JOIN dbo.SurveyQuestions q ON a.QID = q.QID
                WHERE VisitID = @VisitID`)
        .then(function (recordset) { res.json(recordset); })
        .catch(function (err) { res.json({ error: err }); console.log(err); })
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var qst = req.body.quest;
    var ansrs = req.body.answers;
    var qID;
    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("QText", qst.QText);
                request.input("Keyword", qst.Keyword);
                request.execute("SurveyQuestionsInsert")
                    .then(function (recordset, returnValue, affected) {
                        qID = recordset[0][0].QID;
                        console.log('QuestionID: ' + qID);

                        promises.push(Promise.map(ansrs, function (ans) {
                            var request = trans.request();
                            request.input("QID", qID);
                            request.input("AnswerText", ans.AnswerText);
                            return request.execute("SurveyAnswersInsert")
                        }));

                        Promise.all(promises)
                            .then(function (recordset) {
                                trans.commit().then(function () {
                                    res.json({ returnValue: 1, affected: 1 });
                                }).catch(function (err) {
                                    trans.rollback();
                                    res.json({ error: err }); console.log(err);
                                })
                            }).catch(function (err) {
                                trans.rollback();
                                console.log('Transaction Rolled Back');
                                res.json({ error: err }); console.log(err);
                            })

                    }).catch(function (err) {
                        trans.rollback();
                        res.json({ error: err }); console.log(err);
                    })
            }).catch(function (err) {
                trans.rollback();
                res.json({ error: err }); console.log(err);
            })
    }).catch(function (err) {
        res.json({ error: err }); console.log(err); connection.close();
    })
});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var qst = req.body.quest;
    var ansrs = req.body.answers;

    var conf = require('../SQLConfig');
    var connection = new sql.Connection(conf.config);
    connection.connect().then(function () {
        var trans = new sql.Transaction(connection);
        trans.begin()
            .then(function () {
                var promises = [];
                var request = trans.request();
                request.input("QID", req.params.id);
                request.input("QText", qst.QText);
                request.input("Keyword", qst.Keyword);
                request.execute("SurveyQuestionsUpdate")
                    .then(function (recordset) {
                        var request = trans.request();
                        request.query(`SELECT * From dbo.SurveyAnswers Where QID=${req.params.id}`)
                            .then(function (recordset) {
                                var curDet = recordset;
                                console.log(curDet);
                                var addedList = ansrs.filter(function (det) { return !det.AnswerID });
                                console.log(addedList);
                                var deletedList = curDet.filter(function (cur) { return !ansrs.filter(function (newd) { return cur.AnswerID == newd.AnswerID }).length > 0 })
                                console.log(deletedList);
                                var editedList = ansrs.filter(function (newd) { return curDet.filter(function (cur) { return cur.AnswerID == newd.AnswerID }).length > 0 })
                                console.log(editedList);

                                promises.push(Promise.map(addedList, function (ans) {
                                    var request = trans.request();
                                    request.input("QID", req.params.id);
                                    request.input("AnswerText", ans.AnswerText);
                                    return request.execute("SurveyAnswersInsert")
                                }));

                                promises.push(Promise.map(editedList, function (ans) {
                                    var request = trans.request();
                                    request.input("QID", req.params.id);
                                    request.input("AnswerID", ans.AnswerID);
                                    request.input("AnswerText", ans.AnswerText);
                                    return request.execute("SurveyAnswersUpdate")
                                }));

                                promises.push(Promise.map(deletedList, function (ans) {
                                    var request = trans.request();
                                    request.input("AnswerID", ans.AnswerID);
                                    return request.execute("SurveyAnswersDelete")
                                }));

                                Promise.all(promises)
                                    .then(function (recordset) {
                                        trans.commit().then(function () {
                                            connection.close();
                                            res.json({ returnValue: 1, affected: 1 });
                                        }).catch(function (err) {
                                            trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                                        })
                                    }).catch(function (err) {
                                        console.log('Transaction Rolled Back: Promise');
                                        trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                                    })
                            }).catch(function (err) {
                                console.log('Transaction Rolled Back: Update');
                                trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                            })
                    }).catch(function (err) {
                        console.log('Transaction Rolled Back: Transaction');
                        trans.rollback(function () { res.json({ error: err }); console.log(err); connection.close(); });
                    });
            }).catch(function (err) {
                res.json({ error: err }); console.log(err); connection.close();
            })
    }).catch(function (err) {
        res.json({ error: err }); console.log(err); connection.close();
    })
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var request = new sql.Request(sqlConn);
    request.input("QID", req.params.id);
    request.execute("SurveyQuestionsDelete", function (err, recordset, returnValue, affected) {
        if (err) { res.json({ error: err }); console.log(err); }
        else { res.json({ returnValue: returnValue, affected: affected }); }
    });
});
module.exports = router;
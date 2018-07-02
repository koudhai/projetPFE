var config = require('config.json');
var express = require('express');
var router = express.Router();
var staysService = require('services/stays.service');

// routes

router.get('/stays', getallstays);


module.exports = router;
var mongo = require('mongoskin');
var fs = require('fs');
var db = mongo.db("mongodb://localhost:27017/mean-stack-registration-login-example", { native_parser: true });

db.collection('stays').find({}).toArray(
    function (err, docs) {
        s=docs;
    });




function getallstays(req, res) {
  res.send(s);
        
}


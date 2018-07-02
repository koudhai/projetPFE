/*const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
   
    const db = client.db(dbName);
   
    insertDocuments(db, function() {
      findDocuments(db, function() {
        client.close();
      });
    });
  });
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a : 2 }
      , { $set: { b : 1 } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
   
    insertDocuments(db, function() {
      updateDocument(db, function() {
        client.close();
      });
    });
  });
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteOne({ a : 3 }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
   
    insertDocuments(db, function() {
      updateDocument(db, function() {
        removeDocument(db, function() {
          client.close();
        });
      });
    });
  });
  const indexCollection = function(db, callback) {
    db.collection('documents').createIndex(
      { "a": 1 },
        null,
        function(err, results) {
          console.log(results);
          callback();
      }
    );
  };
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
   
    insertDocuments(db, function() {
      indexCollection(db, function() {
        client.close();
      });
    });
  });*/
  const MongoClient = require('mongodb').MongoClient
  var express = require('express');
  var app = express();
uri='mongodb://localhost:27017/mean-stack-registration-login-example'
  app.get('/', (req, res) => {
    MongoClient.connect(uri, (err, db) => {
        if(err) {
            return console.log("Error", err);
        }
        let showlist = db.collection('users').find().toArray();
        console.log(showlist);
        showlist
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    });
});
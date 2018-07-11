var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb) {
      connection.query("SELECT * FROM " +tableInput+";", function(err, data) {
        if(err) throw err;
        cb(data);
      });
    },
    update: function(tableInput, condition, cb) {
      connection.query("UPDATE " +tableInput+ " SET devoured=true WHERE id="+condition+";", function(err, data) {
        if(err) throw err;
        cb(data);
      })
    },
    
    create: function(tableInput, val, cb) {
        connection.query("INSERT INTO " +tableInput+ " (burger_name) VALUES ('"+val+"');", function(err, data) {
            if(err) throw err;
            cb(data);
        })
    }
  }
  
  module.exports = orm; 
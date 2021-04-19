var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://db:27017/";
var db_name = undefined;

function init_db(_db_name) {
    db_name = _db_name;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        var dbo = db.db(db_name);
        dbo.createCollection("users")


        console.log("Database initialized");
    });
}

function add_user(username, id) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        var dbo = db.db(db_name);

        var user = {name: username, id: id, };

        console.log("add user " + username + " with id " + id);
    });
}

function add_notification() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
    });
}
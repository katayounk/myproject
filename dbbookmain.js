
var mongo= require('mongodb').MongoClient;
var url="mongodb+srv://katayoun1:katayoun1@cluster0.5qm9n.mongodb.net/?retryWrites=true&w=majority";

mongo.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db('booksproject');
    dbo.createCollection("shopcollection", function(err,res){
        if(err) throw err;
        console.log("collection created")
        db.close();

    });

});
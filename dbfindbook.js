var mongo=require('mongodb').MongoClient;
var url="mongodb+srv://katayoun1:katayoun1@cluster0.5qm9n.mongodb.net/?retryWrites=true&w=majority";
mongo.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db('booksproject');
    dbo.collection("shopcollection").find({}, ).toArray(function(err,result){
    

if(err) throw err;
        console.log(result);
        db.close();
  
    });
});


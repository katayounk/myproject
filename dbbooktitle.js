var mongo= require('mongodb').MongoClient;
var url="mongodb+srv://katayoun1:katayoun1@cluster0.5qm9n.mongodb.net/?retryWrites=true&w=majority";

mongo.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db('booksproject');
   
    var myObj=[
          {title:"Summer" , bookcat:"Fiction", writer:" Tara Westover", lang:"english"},
          {title:"flowers" , bookcat:"Romance", writer:" sarah alby"},
          {title:"Makethings" , bookcat:"Finance", writer:" albert tignar",lang:"french"},
          {title:"fearless" , bookcat:"psychology", writer:" kate morton"},
          {title:"sandbox" , bookcat:"history", writer:" ela shing"},
       ];

    dbo.collection("shopcollection").insertMany(myObj, function(err,res){
        if(err) throw err;
        console.log("many document was inserted successfully!!!");
        db.close();
    })
})
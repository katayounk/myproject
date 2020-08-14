var express = require('express');
var router = express.Router();
var mongo= require('mongodb').MongoClient;
var url="mongodb+srv://katayoun1:katayoun1@cluster0.5qm9n.mongodb.net/?retryWrites=true&w=majority";
var ssn;
router.get('/', function(req, res, next) {
  ssn=req.session;
  res.render('signup', { error: ssn.dupError});
  //res.render('signup', { var1:''});

 });
router.post('/', function(req, res, next) {
  ssn=req.session;  
  ssn.fname=req.body["firstname"];
  ssn.lname=req.body["lastname"];
  ssn.email=req.body["email"];
  var password=req.body["password"];
 //var fname=req.body["firstname"];
  //check database first if someone has repeated email 
 mongo.connect(url, function(err,db){
  if(err) throw err;
  var dbo = db.db("booksproject");
  var query={email:ssn.email};
  dbo.collection("users").find(query).count(function(err,result){
       if(err) throw err;
      console.log(result);
   if(result==0){
        var myobj= {fname:ssn.fname,lname:ssn.lname,email:ssn.email,password:password}
  
    dbo.collection("users").insertOne(myobj,function(err ,res){
     if (err) throw err;
     console.log("user info inserted successfully!!!");

         db.close();
  });
  res.redirect('/profile');

 
 } else{
   ssn.dupError='user exist';
   res.redirect('/signup');
 }
   db.close();
  });

 
});

});
 
module.exports = router;
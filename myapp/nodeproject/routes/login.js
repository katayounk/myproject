var express = require('express');
var router = express.Router();
var mongo= require('mongodb').MongoClient;
var url="mongodb+srv://katayoun1:katayoun1@cluster0.5qm9n.mongodb.net/?retryWrites=true&w=majority";
var ssn;

router.get('/', function(req, res, next) {
  ssn=req.session;
  res.render('login', {error:ssn.error, lerror:ssn.loginErr});
});

router.post('/', function(req, res, next) {
  ssn=req.session;  
   var uemail=req.body["email"];
  var upass=req.body["password"]; 

  mongo.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("booksproject");
    var query ={$and:[{email:uemail},{password:upass}]};
    dbo.collection("users").find(query).toArray(function(err,result){
         if(err) throw err;
        console.log(result);
        if(result.length >0){
          ssn.fname=result[0].fname;
          ssn.lname=result[0].lname;
          ssn.email=result[0].email;
          res.redirect('/profile');


        }else{
          ssn.loginErr="Email or Password wrong";
          res.redirect('login');
        }
      });

        
     db.close();
    });
    
  });
module.exports = router;

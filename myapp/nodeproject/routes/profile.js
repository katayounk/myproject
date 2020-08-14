var express = require('express');
var router = express.Router();
var ssn;

router.get('/', function(req, res, next) {
  ssn=req.session;
  if(ssn.email){
    res.render('profile', { fname:ssn.fname , lname:ssn.lname, email:ssn.email});
  }
  else{
    ssn.error='please log in with email and pass';
    res.redirect('/login');

  }

 });

module.exports = router;

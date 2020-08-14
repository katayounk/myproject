var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/*get home page */

router.get('/', function(req, res, next) {
  res.render('contact', { msg: ' ' });
 });
router.post('/', function(req, res, next) {

// take values from form input data
 var fname=req.body["firstname"];
 var lname=req.body["lastname"];
 var email=req.body["email"];
 var message=req.body["message"];

 //creating smtp mail transporter with google credentials
 var smtpTrans = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   auth:{
    user: 'katayounkat@gmail.com',
    pass: 'Itisnew1'
}
 });
//preparing mailer script 
 var mailOptions = {
  from: 'katayounkat@gmail.com',
  to: 'katayoun.katanchi@gmail.com, katy_h77@yahoo.com', 
   subject:'from '+ fname+ "  " +'Sending email using express nodejs',
   html :  message  + "was sent from  " + fname +" " +lname + " with email: " +email 
};

smtpTrans.sendMail(mailOptions,function(err,info){
  if(err) {
      console.log(err);
  }else {
      console.log('email sent' + info.response);
  }
});

 res.render('responsepage', { msg : fname+'Thanks the email was sent from webmaster' });
 // res.render('about ', { var1: '', });  mitonim redirect konim be safhe dige 

});

module.exports = router;
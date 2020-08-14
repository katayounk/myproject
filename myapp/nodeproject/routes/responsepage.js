var express = require('express');
var router = express.Router();

//* GET home page. */
router.get('/', function(req, res, next) {
  res.render('responsepage', {var1:''});
});
module.exports = router;
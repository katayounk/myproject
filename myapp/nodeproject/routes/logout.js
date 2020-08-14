var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //destroy session and redirect to homepage
    req.session.destroy();
    res.redirect('/');

});

module.exports = router;

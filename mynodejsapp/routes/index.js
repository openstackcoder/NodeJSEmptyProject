var express = require('express');
var router = express.Router();


router.use("/home",function(req,res,next)
{
console.log("Node has received the request and the code can be written here.");
res.type("html");
res.render('home');

});
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'NodeJS application based on Express Web Framework.' });
});

module.exports = router;

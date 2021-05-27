var express = require('express');
var router = express.Router();

var foods = require('/DonnasDelights/foodpics.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'D-CODE' });
});

///Set up response for about page request
router.get("/about", function(req, res, next) {
  res.render("about");
});

///Set up response for order page request
router.get("/order", function(req, res, next) {
  res.render("order");
});

///Set up response for order page request
router.get("/dishes", function(req, res, next) {
  res.render("dishes",{foods});
  // let stuff = foods;
});
module.exports = router;

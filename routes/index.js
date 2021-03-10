var express = require('express');
var router = express.Router();
let foods = require('./food_pics.json');

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

  res.render("dishes",{json:foods});
});
module.exports = router;

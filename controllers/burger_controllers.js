var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

// get route -> index
router.get("/", function(req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
// express callback response by calling burger.selectAllBurger
burger.all(function(data) {
// Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
var hbsObject = {burgers: data};
res.render("index", hbsObject);
  });	
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
// takes the request object using it as input for burger.addBurger
burger.create(req.body.burger_name, function(result) {

 console.log(result);
 res.redirect("/");

  });
});

// put route back to index
router.put("/burgers/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {

		console.log(result);
		res.redirect("/");
	});
});

module.exports = router;
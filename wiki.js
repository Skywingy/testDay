const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
res.sendFile(__dirname + '/index.html');
console.log("Router working")
});

// About page route
router.get("/about", function (req, res) {
res.sendFile(__dirname + '/about.html');
});

//Contact page route
router.get("/contact", function (req, res) {
    res.sendFile(__dirname + '/contact-me.html');
    });

// Error page route
router.get("/error", function (req, res) {
    res.sendFile(__dirname + '/404.html');
    });


module.exports = router;
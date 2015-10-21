var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var countriesController = require('../controllers/countries.js');
var staticController = require('../controllers/static.js');

  // Static
  router.route('/')
    .get(staticController.home);


  // after login user will come here
  router.route("/home")
    .get(staticController.home);

  // Event
  router.route('/countries')
    .get(countriesController.index);


module.exports = router;

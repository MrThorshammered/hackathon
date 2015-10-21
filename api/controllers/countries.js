var Country = require("../models/country.js");
var request = require("request");

function index(req, res){

  Country.find().count()
  .exec(function(err, count){
    var rank = Math.floor(Math.random() * Number(count));
    Country.find({rank: rank}, function(err, country){
      if (err) console.log(err);
      country[0].getTrend(function(err, trends){
        country[0].getFX(function(err, fx){
          console.log("fx is: " + fx);
          res.json({country: country[0], trends: trends[0], fx: fx});
        });
      });
    });
  });
}

module.exports = {
  index: index
}
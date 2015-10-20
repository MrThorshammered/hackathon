var Country = require("../models/country.js");

function index(req, res){

  Country.find().count()
  .exec(function(err, count){
    var rank = Math.floor(Math.random() * Number(count));
    Country.find({rank: rank}, function(err, country){
      if (err) console.log(err);
      console.log(typeof country);
      country[0].getTrend(function(err, trends){
        console.log("trends is: ")
        console.log(trends)
        console.log("this is: ");
        console.log(country[0]);
        res.json({country: country[0], trends: trends[0]});
      });
      // res.json(country);
    });
  });
}

module.exports = {
  index: index
}
var Country = require("../models/country.js");

function index(req, res){

  console.log("country count");

  Country.find().count()
  .exec(function(err, count){
    console.log("country count");
    console.log(typeof count);
    console.log(count);
    var rank = Math.floor(Math.random() * Number(count));
    console.log("this is the rank");
    console.log(rank);
    Country.find({rank: rank}, function(err, country){
      if (err) console.log(err);
      console.log("this is the random country: ");
      console.log(country);
      res.json(country);
    });
  });
}

module.exports = {
  index: index
}
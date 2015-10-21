var mongoose = require("mongoose");
var request = require("request");
var Twit = require("twit");
var twitter = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY, 
    consumer_secret:      process.env.TWITTER_CONSUMER_SECRET, 
    access_token:         process.env.TWITTER_ACCESS_TOKEN, 
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var countrySchema = new mongoose.Schema({
  name: String,
  capital: String,
  region: String,
  population: Number,
  location: {
    latitude: {type: Number}, 
    longitude: {type: Number}
  },
  currency: String,
  languages: [String],
  rank: Number,
  woeid: Number
});

// self.woeid

countrySchema.methods.getTrend = function(callback){
  var self = this;
  twitter.get('trends/place', { id: 1 }, function (err, data, response) {
    console.log(err)
    console.log(data)
    callback(err, data);
  })
};

countrySchema.methods.getFX = function(callback){
  var self = this;
  request('https://openexchangerates.org/api/latest.json?app_id=6f9f9fb6e5654626a3f2dc32b6085d75', function (err, data, response) {
    if (err) console.log(err);
    var gbpRate = JSON.parse(data.body).rates.GBP;
    var currencyRate = JSON.parse(data.body).rates[self.currency];
    var fx = (currencyRate/gbpRate).toFixed(2);
    // console.log("fx inside getFX is " + fx);
    callback(err, {rate: fx, currency: self.currency});
  })
};


module.exports = mongoose.model("Country", countrySchema);
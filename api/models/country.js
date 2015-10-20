var mongoose = require("mongoose");
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
  rank: Number
});

countrySchema.methods.getTrend = function(callback){
  twitter.get('trends/place', { id: 1 }, function (err, data, response) {
    console.log(err)
    console.log(data)
    callback(err, data);
  })
};

module.exports = mongoose.model("Country", countrySchema);
var mongoose = require("mongoose");

var countrySchema = new mongoose.Schema({
  name: String,
  capital: String,
  region: String,
  population: Number,
  location: {
    latitude: {type: Number}, 
    longitude: {type: Number}
  },
  // latlng: [Number],
  currency: String,
  languages: [String],
  rank: Number
});

countrySchema.methods.getRandomCountry = function(){
  rank = Math.floor(Math.random() * Country.find().count());
  console.log(rank);
  return Country.find({rank: rank});
}

module.exports = mongoose.model("Country", countrySchema);
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
  currency: String,
  languages: [{type: String}]
});

module.exports = mongoose.model("Country", countrySchema);
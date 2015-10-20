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
  languages: [String]
});

module.exports = mongoose.model("Country", countrySchema);
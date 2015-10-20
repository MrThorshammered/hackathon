var request = require("request");
var Country = require("./country.js");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WAIG');

request('https://restcountries.eu/rest/v1/all', function (error, response, body){
    var countries = JSON.parse(body);
    console.log(countries.length);
    for(i=0; i<countries.length; i++){
      // console.log(countries[i]);
      newCountry = {
        name: countries[i].name || null,
        capital: countries[i].capital || null,
        region: countries[i].region || null,
        population: countries[i].population || null,
        currency: countries[i].currencies[0] || null,
        location: {
          latitude: countries[i].latlng[0] || null,
          longitude: countries[i].latlng[1] || null
        },
        languages: countries[i].languages || null,
        rank: i
      };
      Country.create(newCountry, function(err, createdCountry){
        if (err) console.log(err);
        console.log("created country: ");
        console.log(createdCountry);
      });
      // console.log("country variable is: ");
      // console.log(country);
      // newCountries.push(country);
    // }
    //   newCountries.
    //  country.save(function(err, createdCountry){
    //     if (err) console.log(err);
    //     console.log(createdCountry);
    }
  })
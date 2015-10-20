angular.module('waigApp')
  .controller('DataController', DataController);

// DataController.$inject = ['$http']

function DataController($http) {

  var self = this;

  self.country;
  self.trends;


  function getCountry() {
    $http
      .get('http://localhost:3000/countries')
      .then(function(response) {
        console.log(response.data);
        console.log(typeof response.data);
        
        self.country = response.data.country;
        self.trends = response.data.trends;
      })
  }

  getCountry();

}
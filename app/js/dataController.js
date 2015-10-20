angular.module('waigApp')
  .controller('DataController', DataController);

// DataController.$inject = ['$http']

function DataController($http) {

  var self = this;

  self.country;
  self.trends;
  self.fx;

  function getCountry() {
    $http
      .get('http://localhost:3000/countries')
      .then(function(response) {
        console.log(response.data);
        console.log(response.data.trends);
        
        self.country = response.data.country;
        self.trends = response.data.trends;
        self.fx = response.data.fx;
      })
  }

  getCountry();

}
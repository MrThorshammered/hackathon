angular.module('waigApp')
  .controller('DataController', DataController);

// DataController.$inject = ['$http']

function DataController($http) {

  var self = this;

  self.all = [];

  function getCountry() {
    $http
      .get('http://localhost:3000/countries')
      .then(function(response) {
        self.all = response.data;
      })
  }

  getCountry();

}
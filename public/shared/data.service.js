(function() {
  'use strict';

  angular
  .module('loginDemo.shared')
  .factory('DataService', DataService);

  DataService.$inject = [
    '$http'];

  function DataService(
    $http) {

    function getCountryCodesList() {
      return $http.get('data/country-call-codes.json');
    }

    return {
      getCountryCodesList: getCountryCodesList
    };
  }
})();

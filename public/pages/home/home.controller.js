(function() {
  'use strict';

  angular
  .module('loginDemo')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['User'];

  function HomeController(
    User) {
    var vm = this;

    vm.email = '';

    User.getUser().then(function(response) {
      vm.email = response.data.email;
    })
  }
})();

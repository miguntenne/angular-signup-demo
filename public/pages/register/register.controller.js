(function() {
  'use strict';

  angular
  .module('loginDemo')
  .controller('RegisterController', RegisterController);

  RegisterController.$inject = [
    'User',
    'DataService',
    '$http'
  ];

  function RegisterController(
    User,
    DataService,
    $http) {
    var vm = this;

    DataService.getCountryCodesList().then(function(result) {
      vm.countryCodeList = result.data;
    });

    vm.alerts = [];
    vm.user = {
      email: '',
      password: '',
      countryCode: '',
      phone: ''
    };
    vm.confirmPassword = '';

    vm.register = function(isValid) {
      if(isValid) {
        if(vm.user.password === vm.confirmPassword) {
          if (vm.user.countryCode) {
            User.register(vm.user).then(function(success) {
              $location.path('/login');
            }, function(error) {
              addAlert('danger', error.data);
            });
          } else {
            addAlert('warning', 'Choose a correct country code');
          }
        } else {
          addAlert('warning', 'Passwords don\'t match');
        }
      }
    };

    vm.closeAlert = function(index) {
      vm.alerts.splice(index, 1);
    };

    function addAlert(type, message) {
      vm.alerts.push({
        type: type,
        msg: message
      });
    }
  }
})();

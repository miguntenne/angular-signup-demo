(function() {
  'use strict';

  angular
  .module('loginDemo')
  .controller('LoginController', LoginController);

  LoginController.$inject = [
    'AuthService',
    'User',
    '$location'
  ];

  function LoginController(
    AuthService,
    User,
    $location) {
    var vm = this;

    vm.alerts = [];
    vm.user = {
      email: '',
      password: ''
    };

    vm.login = function(isValid) {
      if(isValid) {
        User.authenticate(vm.user).then(function(success) {
          AuthService.setUserLoggedIn(true);
          $location.path('/login/auth');
        }, function(error) {
          addAlert('danger', error.data);
        })
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

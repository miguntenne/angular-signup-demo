(function() {
  'use strict';

  angular
  .module('loginDemo.shared')
  .factory('AuthService', AuthService);

  AuthService.$inject = [];

  function AuthService() {

    var hasLoggedIn = false;

    function setUserLoggedIn(hasLogged) {
      hasLoggedIn = hasLogged
    }

    function getUserLoggedIn() {
      return hasLoggedIn;
    }

    return {
      setUserLoggedIn: setUserLoggedIn,
      getUserLoggedIn: getUserLoggedIn
    };
  }
})();

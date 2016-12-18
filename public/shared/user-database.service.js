(function() {
  'use strict';

  angular
  .module('loginDemo.shared')
  .factory('User', userDbService);

  userDbService.$inject = ['$http'];

  function userDbService($http) {

    function authenticate(user) {
      return $http.post('/api/user/login', user);
    }

    function register(user) {
      return $http.post('/api/user/register', user);
    }

    function twoFactOneTouch() {
      return $http.post('/api/authy/onetouch');
    }

    function verifyToken(token) {
      return $http.post('/api/authy/verify', {token: token});
    }

    function getUser() {
      return $http.get('/api/user');
    }

    return {
      authenticate: authenticate,
      register: register,
      twoFactOneTouch: twoFactOneTouch,
      verifyToken: verifyToken,
      getUser: getUser
    }
  };
})();

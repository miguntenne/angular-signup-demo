(function() {
  'use strict';

  angular
  .module('loginDemo')
  .config(routeConfig);

  function routeConfig(
    $routeProvider) {

      $routeProvider
      .when('/login', {
        templateUrl: 'pages/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/login/auth', {
        templateUrl: 'pages/two-factor-auth/two-factor-auth.html',
        controller: 'TwoFactorAuthController',
        controllerAs: 'auth',
        authorize: true
      })
      .when('/register', {
        templateUrl: 'pages/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      }).when('/home', {
        templateUrl: 'pages/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        authorize: true
      })
      .otherwise('/login');
  }
}
)();

  (function() {
      'use strict';

      angular
          .module('loginDemo')
          .run(runConfig);

      function runConfig(
          AuthService,
          $rootScope,
          $location) {

          $rootScope.$on("$routeChangeStart", function(event, next) {
            if(next.authorize) {
              if (!AuthService.getUserLoggedIn()) {
                  event.preventDefault();
                  $location.path('/login');
              }
            }
          });
      }

  })();

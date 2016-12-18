(function() {
    'use strict';

    angular.module('loginDemo').controller('TwoFactorAuthController', TwoFactorAuthController);

    TwoFactorAuthController.$inject = [
        'User',
        '$location'
    ];

    function TwoFactorAuthController(
        User,
        $location) {
        var vm = this;

        vm.alerts = [];
        vm.token = '';
        vm.verifyEnabled = false;

        vm.verifyToken = function() {
            User.verifyToken(vm.token).then(function(success) {
                $location.path('/home');
            }, function(error) {
              addAlert('warning', error);
            })
        };

        vm.authOneTouch = function() {
            User.twoFactOneTouch().then(function(success) {
                vm.verifyEnabled = true;
            }, function(error) {
              addAlert('warning', error);
            })
        }

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

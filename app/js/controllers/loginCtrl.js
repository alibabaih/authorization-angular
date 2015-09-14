'use strict';

myApp.controller('loginCtrl', function($scope, loginService) {
    $scope.msgtxt = '';
    $scope.login = function(user) {
        //console.log('enter function');
        loginService.login(user, $scope); //call login service
    }
})
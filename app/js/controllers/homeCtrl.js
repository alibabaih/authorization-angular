'use strict';

myApp.controller('homeCtrl', ['$scope', 'loginService', function($scope, loginService) {
    $scope.txt = 'Home page';
    $scope.logout = function() {
        loginService.logout();
    }
}]);
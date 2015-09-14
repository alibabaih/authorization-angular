'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('loginApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
        templateUrl: 'partials/login.html', 
        controller: 'loginCtrl'
    });
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html', 
        controller: 'homeCtrl'
    });
  	$routeProvider.otherwise({redirectTo: '/login'});
}]);

//close home page unauthorized users
//myApp.run(function($rootScope, $location, loginService) {
//    var routespermission = ['/home']; // route that require login
//    $rootScope.$on('$routeChangeStart', function(){
//        if(routespermission.indexOf(location.path()) != -1 && !loginService.islogged()) {
//            $location.path('/login');
//        }
//    });
//});
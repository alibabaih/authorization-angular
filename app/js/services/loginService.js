'use strict';

myApp.factory('loginService', function($http, $location, sessionService) {
    return {
        login: function (data, scope) {
            //console.log('enter function service');
            var $promise = $http.post('data/user.php', data); //send data to 
            $promise.then(function(msg) {
                var uid = msg.data;
                if(uid) {
                    sessionService.set('user', uid);
                    $location.path('/home');
                } else {
                    scope.msgtxt = 'Incorrect information';
                    $location.path('/login');
                }
                //if(msg.data == 'success') scope.msgtxt = 'Correct information';
                //console.log('success login');
                //else scope.msgtxt = 'Incorrect information'; 
                // console.log('error login');
            });
        },
        logout: function() {
            sessionService.destroy('user');
            $location.path('/login');
        },
        islogged: function() {
            if(sessionService.get('user')) return true;
        }
    }
});
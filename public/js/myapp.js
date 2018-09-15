var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://myportfolio-bc837.firebaseio.com/');

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl: 'partials/home.html',
          controller: 'BackendController'
        }).
        when('/portfoliocontrol', {
          templateUrl: 'partials/,
          controller: 'BackendController'
        }).
        when('/projects', {
          templateUrl: 'partials/projects.html',
          controller: 'BackendController'
        }).
        otherwise ({
          redirectTo: '/home'
        });
    }]);

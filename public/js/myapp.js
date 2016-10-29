var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://myportfolio-bc837.firebaseio.com/');

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl: 'partials/home.html',
          controller: 'BackendController'
        }).
        when('/news', {
          templateUrl: 'partials/news.html',
          controller: 'BackendController'
        }).
        when('/gallery', {
          templateUrl: 'partials/gallery.html'
          //controller: 'RegistrationController'
        }).
        otherwise ({
          redirectTo: '/home'
        });
    }]);

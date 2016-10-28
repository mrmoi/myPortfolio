var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://myportfolio-bc837.firebaseio.com/');

/*
myApp.run(['$rootScope','$location',
    function($rootScope, $location) {
      $rootScope.$on('$routeChangeError',
          function(event, next, previous, error) {
            if(error=='AUTH_REQUIRED') {
              $rootScope.message = 'Sorry, you must log in to access that page';
              $location.path('/control');
          }
      });
}]);
*/

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl: 'partials/home.html',
          //controller: 'RegistrationController'
        }).
        when('/news', {
          templateUrl: 'partials/news.html',
          controller: 'PlayersController'
        }).
        when('/gallery', {
          templateUrl: 'partials/gallery.html',
          //controller: 'RegistrationController'
        }).
        otherwise ({
          redirectTo: '/home'
        });
    }]);

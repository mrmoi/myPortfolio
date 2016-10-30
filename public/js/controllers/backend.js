myApp.controller('BackendController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_URL',
function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

    /* NAME FIELD*/
    var nameRef = new Firebase(FIREBASE_URL + '/name');
    var nameInfo = $firebaseArray(nameRef);
    $scope.names = nameInfo;

    /* ABOUT ME CONTENT */
    var bioRef = new Firebase(FIREBASE_URL + '/bio');
    var bioInfo = new $firebaseArray(bioRef);
    $scope.bios = bioInfo;


    /* NAME FIELD FUNCTION */
    $scope.addName = function() {
        nameInfo.$add({
            name: $scope.nameField,
            date: Firebase.ServerValue.TIMESTAMP
        }).then(function () {
            $scope.nameField = '';
        });
    };

    /* ABOUT ME CONTENT FUNCTION */
    $scope.addBio = function () {
        bioInfo.$add({
            about: $scope.aboutField,
            date: Firebase.ServerValue.TIMESTAMP
        }).then(function() {
            $scope.aboutField='';
        });
    };





}]); // END Controller




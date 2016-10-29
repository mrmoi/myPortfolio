myApp.controller('BackendController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_URL',
function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);

    /* NAME FIELD*/
    var nameRef = new Firebase(FIREBASE_URL + '/name');
    var nameInfo = $firebaseArray(nameRef);
    $scope.name = nameInfo;

    /* ABOUT ME CONTENT */
    var bioRef = new Firebase(FIREBASE_URL + '/bio');
    var bioInfo = new $firebaseArray(bioRef);
    $scope.bio = bioInfo;






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
        }).then(function () {
            $scope.aboutField='';
        });
    };





}]); // END Controller








/*
######## CODE SNIPPETS ########

 var auth = $firebaseAuth(ref);

 auth.$onAuth(function(authUser) {
 if(authUser) {

 playersInfo.$loaded().then(function(data) {
 $rootScope.howManyPlayers = playersInfo.length;
 });

 playersInfo.$watch(function(data) {
 $rootScope.howManyPlayers = playersInfo.length;
 });

 /*} // User Authenticated
 }); // on Auth

 $scope.addPlayer = function() {
 playersInfo.$add({
 name: $scope.playername,
 position: $scope.playerposition,
 /*nationality: $scope.playernationality,
 number: $scope.playernumber,
 status: $scope.playerstatus,
 date: Firebase.ServerValue.TIMESTAMP
 }).then(function() {
 $scope.playername='';
 $scope.playerposition='';
 /*$scope.playernationality='';
 $scope.playernumber='';
 $scope.playerstatus='';
 });
 };

 $scope.deletePlayer = function(key) {
 playersInfo.$remove(key);
 }; // deleteMeeting



 ######## CODE SNIPPETS ########
*/

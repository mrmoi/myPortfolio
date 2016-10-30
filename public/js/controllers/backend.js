myApp.controller('BackendController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_URL',
function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

    /* NAME FIELD*/
    var nameRef = new Firebase(FIREBASE_URL + '/name');
    var nameInfo = $firebaseArray(nameRef);
    $scope.names = nameInfo;

    /* ABOUT ME CONTENT */
    var bioRef = new Firebase(FIREBASE_URL + '/bio');
    var bioInfo = new $firebaseArray(bioRef);
    var index = bioInfo.$indexFor(bioRef);
    $scope.bios = bioInfo;

    /* PROJECTS CONTENT */
    var projectRef = new Firebase(FIREBASE_URL + '/project');
    var projectInfo = new $firebaseArray(projectRef);
    $scope.projects = projectInfo;


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

    /* DELETE BIO */
    $scope.deleteBio = function() {
        //bioInfo.$remove();

        bioInfo.$remove(index + 1).then(function(ref) {
            // data has been deleted locally and in the database
        }, function(error) {
            console.log("Error:", error);
        });

        console.log("remove");
    };


    /* PROJECTS FUNCTION */
    $scope.addProject = function () {
        projectInfo.$add({
            name: $scope.projectName,
            about: $scope.projectAbout,
            resources: $scope.projectResources,
            link: $scope.projectLink,
            date: Firebase.ServerValue.TIMESTAMP
        }).then(function() {
            $scope.projectName='';
            $scope.projectAbout='';
            $scope.projectResources='';
            $scope.projectLink='';
        });
    };





}]); // END Controller




/// <reference path="angular.min.js" />

// steps
// create a module
var theModule = angular
    .module("myModule", [])
    .controller("myController", function($scope){
        var student = {
            id: "1",
            name: "umair",
            rollno: "cs123"
        };

        $scope.student = student;
    });


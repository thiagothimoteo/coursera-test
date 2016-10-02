(function() {
'use strict';

var app = angular.module('LunchCheck', []);

app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.menu = "";
    $scope.message = "";

    $scope.lunchChecker = function () {
        var list = $scope.menu.split(",");
        if ( $scope.menu == "") {
            $scope.message = "Please enter data first!";
        } else {   
            list.length <=3 ? $scope.message = "Enjoy!" : $scope.message = "Too much!"
        }
    }
}


})();
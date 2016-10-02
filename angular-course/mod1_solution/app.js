(function() {
'use strict';

var app = angular.module('LunchCheck', []);

app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.menu = "";
    $scope.message = "";

    $scope.lunchChecker = function () {
        if (!$scope.menu) {
            $scope.message = "Please enter data first!";
            return;
        }
        var list = $scope.menu.split(",");
        $scope.message = list.length <= 3 ? "Enjoy!" : "Too much!"
        console.log(list, list.length);
    }
}


})();
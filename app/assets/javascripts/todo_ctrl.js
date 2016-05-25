(function () {
  "use strict";
  angular.module("app").controller("todoCtrl", function($scope) {

  $scope.tasks = [];

  $scope.addTask = function(task) {
    if (task) {
      $scope.tasks.push(task);
      $scope.newTask = null;
    }
  }

  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
  }

  $scope.isPositive = function(task) {
    task.indexOf("stupid") === -1;
  }

  window.$scope = $scope;
  });
})();
(function () {
  "use strict";

  angular.module("app").controller("miscCtrl", function($scope, $http) {

    $scope.message = "Hello World!";

    $scope.tasks = ["Take out trash", "Create trash", "Mow the lawn"];

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
      $scope.newTask = "";
    }

    $scope.deleteTask = function(task) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
    }

    $http.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
    .success(function(response) {$scope.cityWorkers = response;
    });

  });
})();
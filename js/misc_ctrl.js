(function () {
  "use strict";

  angular.module("app").controller("miscCtrl", function($scope) {

    $scope.message = "Hello World!";

    $scope.tasks = ["Take out trash", "Create trash", "Mow the lawn"];

  });
})();
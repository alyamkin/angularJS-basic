function MainController(a) {
  a.name = "Todd";
}

MainController.$inject = ["$scope"];

angular.module("app").controller("MainController", MainController);

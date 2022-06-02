function UserController($http) {
  let ctrl = this;
  let API = `//jsonplaceholder.typicode.com/users/`;
  this.userId = "";
  this.chosenUser = {};
  this.getUser = function () {
    if (!this.userId) {
      return;
    }
    $http.get(API + this.userId).then(
      function (response) {
        ctrl.chosenUser = response.data;
      },
      function (reason) {
        console.log(reason);
      }
    );
  };
}

angular.module("app").controller("UserController", UserController);

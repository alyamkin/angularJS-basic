function UserController(UserService) {
  let ctrl = this;
  let API = `//jsonplaceholder.typicode.com/users/`;
  this.userId = "";
  this.chosenUser = {};
  this.allUsers = [];

  this.getAllUsers = function () {
    UserService.getAllUsers().then(function (response) {
      ctrl.allUsers = response;
    });
  };

  this.getUser = function () {
    if (!this.userId) {
      return;
    }

    UserService.getUser(this.userId).then(function (response) {
      ctrl.chosenUser = response;
    });
  };
}

angular.module("app").controller("UserController", UserController);

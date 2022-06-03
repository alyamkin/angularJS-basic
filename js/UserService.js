function UserService($http) {
  let API = `//jsonplaceholder.typicode.com/users/`;

  function getUser(userId) {
    return $http.get(API + userId).then(
      function (response) {
        return response.data;
      },
      function (reason) {
        return reason;
      }
    );
  }

  function getAllUsers() {
    return $http.get(API).then(
      function (response) {
        return response.data;
      },
      function (reason) {
        return reason;
      }
    );
  }

  return {
    getUser,
    getAllUsers,
  };
}

angular.module("app").service("UserService", UserService);

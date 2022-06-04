function OrderController() {
  this.orderQuantity = 5;
  this.name = "Pizza";
}

angular.module("app").controller("OrderController", OrderController);

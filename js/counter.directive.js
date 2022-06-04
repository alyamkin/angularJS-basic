function counter() {
  return {
    scope: {},
    bindToController: {
      title: "@name",
      count: "=", // '=count'
    },
    restrict: "E",
    controller: "CounterController as counter",
    template: `
      <div class="counter">
        <label>title</label>
        <input type="text" ng-model="counter.count" />
        <button type="button" ng-click="counter.decrement();">-</button>
        <button type="button" ng-click="counter.increment();">+</button>
      </div>
    `,
  };
}

angular.module("app").directive("counter", counter);

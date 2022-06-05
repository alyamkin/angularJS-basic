function orderForm() {
  return {
    restrict: "E",
    scope: {},
    bindToController: {
      data: "=", // "=data"
      submit: "&", // &submit
    },
    controller: "OrderFormController as form",
    template: `
      <pre>{{ orderForm | json}}</pre>
      <form name="orderForm" novalidate ng-submit="form.onSubmit();">
        <input name="name" type="text" ng-model="form.data.name"  placeholder="Your name">
        <input name="email" type="text" ng-model="form.data.email" placeholder="Your email">
        <input name="location" type="text" ng-model="form.data.location" placeholder="Your location">
        <select>
          <option value="">Select...</option>

        </select>
        <textarea placeholder="Any messages (optional)" ng-model="form.data.comments"></textarea>
        <button type="submit">Order</Order>
      </form>
    `,
  };
}

angular.module("app").directive("orderForm", orderForm);

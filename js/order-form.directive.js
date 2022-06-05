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
      <pre>{{ form | json}}</pre>
      <form name="orderForm" novalidate ng-submit="form.onSubmit();">
        <input name="name" required="" type="text" ng-model="form.data.name"  placeholder="Your name">
        <input name="email" required="" type="text" ng-model="form.data.email" placeholder="Your email">
        <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
        <select 
          name="orderChoice" 
          required="" 
          ng-model="form.data.product"
          ng-options="product.label for product in form.products">
          <option value="">Select...</option>

        </select>
        <textarea required="" placeholder="Any messages (optional)" ng-model="form.data.comments"></textarea>
        <button type="submit">Order</Order>
      </form>
    `,
  };
}

angular.module("app").directive("orderForm", orderForm);

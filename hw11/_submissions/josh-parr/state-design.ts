module test {
  interface State {
    order: Order;

    verifyPayment();
    shipOrder();
  }

  class Order {
    public paymentPendingState: State;
    public orderShipedState: State;
    public orderBeingPrepared: State;

    public currentState: State;

    constructor() {
      this.paymentPendingState = new PaymentPendingState(this);
      this.orderShipedState = new OrderShippedState(this);
      this.orderBeingPrepared = new OrderBeingPrepared(this);

      this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
      this.currentState = state;
    }

    public getCurrentState(): State {
      return this.currentState;
    }
  }

  class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    verifyPayment() {
      console.log("Payment verified! Shipping soon.");
      this.order.setState(this.order.orderBeingPrepared);
    }
    shipOrder() {
      console.log("Cannot ship order when payment is pending.");
    }
  }

  class OrderBeingPrepared implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    verifyPayment() {
      console.log("Payment is already verified.");
    }
    shipOrder() {
      console.log("Shipping your order now...");
      this.order.setState(this.order.orderShipedState);
    }
  }

  class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    verifyPayment() {
      console.log("Payment is already verified.");
    }
    shipOrder() {
      console.log("Order is already shipped.");
    }
  }

  let order = new Order();

  order.getCurrentState().verifyPayment();
  order.getCurrentState().shipOrder();

  console.log(
    "Order state: " + (<any>order.getCurrentState()).constructor.name
  );
}

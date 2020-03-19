function Cart(){}

//old cart constructor
Cart.prototype.calculateTotal = function(items){
    let total;

    for (let index = 0; index < items.length; index++) {
        total += items[index].price;
    }
    return total;
}

//new cart constructor
function NewCart(coupon){
    this.coupon = coupon;
}

NewCart.prototype.calculateTotalAndApplyCoupon = function(items){
    let total;

    for (let index = 0; index < items.length; index++) {
        total += items[index].price;
    }
    return total-coupon;
}

//ADAPTER
function CartAdapter(coupon){
    let cart = new NewCart(coupon);

    function calculateTotal(items){
        cart.calculateTotalAndApplyCoupon(items);
    }

    return{
        calculateTotal: calculateTotal
    }
}

//This allows for not making other changes by adapting the old cart constructor Cart to NewCart
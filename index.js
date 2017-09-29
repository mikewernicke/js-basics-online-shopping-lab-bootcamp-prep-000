var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  console.log(item + " has been added to your cart.");
  cart.push( { [item] : itemPrice } )
  return cart
}

function viewCart() {
  var cartListing = [];
if (cart.length === 0) {
  return console.log("Your shopping cart is empty.");
}
else {
  for(var i = 0; i < cart.length; i++) {
    var itemName = object.keys(cart[i]);
    var itemPrice = cart[i];
    //if(i < cart.length - 1) {
    //  var itemPhrase = itemName + " at $" + itemPrice;
    //}
    //else if(i = cart.length - 1) {
    //  itemPhrase = " and " + itemName + " at $" + itemPrice;
    //}
    //cartListing.push(itemPhrase);
    }
  }
  return console.log("In your cart, you have " + cartListing + ".");
}

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost =+ Number.parseInt(cart[i], [10] );
  }
  return totalCost;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
    else {
      console.log("That item is not in your cart.");
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

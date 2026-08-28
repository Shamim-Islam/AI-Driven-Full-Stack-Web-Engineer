/*
  Problem 4: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/



// Accumulator -> 0
// Pen -> Accumulator =  0 + (20 * 3) = 60
// Notebook -> Accumulator = 60 + (50 * 2)
// Accumulator -> 160

let getCartTotal = (cart) => {
  let total = cart.reduce((accum, elm)=> {
    console.log(accum, elm);
   return accum + (elm.price * elm.qty)
  }, 0)
  return total;
}

cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

    console.log(getCartTotal(cart));
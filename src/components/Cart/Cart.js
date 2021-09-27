import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.cart);
  const { cart, quantity } = props;
  // console.log(cart);

  // Quantity, total, shipping
  let totalQuantity = 0;
  let total = 0;
  let shipping = 0;

  for (const getQuantity in quantity) {
    // console.log(quantity[getQuantity]);
    totalQuantity += quantity[getQuantity];
  }

  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
    // totalQuantity = totalQuantity + product.quantity;
  }
  // console.log(totalQuantity);

  // const totalReducer = (previous, product, totalQuantity) =>
  //   previous + product.price * totalQuantity;
  // const total = cart.reduce(totalReducer, 0);

  // const totalShipping = (previous, product) => previous + product.shipping;
  // const shipping = cart.reduce(totalShipping, 0);

  // tax calculation
  const tax = (total + shipping) * 0.1;
  // grand total
  const grandTotal = total + tax + shipping;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Items ordered: {totalQuantity}</p>
      <div className="cart-total">
        <p className="cart-price">
          <span>Items:</span>
          <span>{total.toFixed(2)}</span>
        </p>
        <p className="cart-price">
          <span>Shipping & Handling:</span>
          <span>{shipping.toFixed(2)}</span>
        </p>
        <p className="cart-price">
          <span>Estimated Tax:</span>
          <span>{tax.toFixed(2)}</span>
        </p>
        <p className="cart-price">
          <span>Order Total:</span>
          <span>{grandTotal.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;

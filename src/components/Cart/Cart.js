import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props;
  console.log(cart);

  const totalReducer = (previous, product) => previous + product.price;
  const total = cart.reduce(totalReducer, 0);
  //   shipping
  const totalShipping = (previous, product) => previous + product.shipping;
  const shipping = cart.reduce(totalShipping, 0);

  const tax = (total + shipping) * 0.1;

  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Items ordered: {cart.length}</p>
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

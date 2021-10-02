import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import {
  clearTheCart,
  getStoredCart,
  removeFromDb,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const history = useHistory();
  const [products, setproducts] = useProducts();
  const [quantity, setQuantity] = useState();
  const [cart, setCart] = useCart(products);

  useEffect(() => {
    const getData = getStoredCart();
    // console.log(getData);
    setQuantity(getData);
  }, []);

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
    const getData = getStoredCart();
    setQuantity(getData);
  };

  const handleOrderReview = () => {
    history.push("/placeorder");
    setCart([]);
    clearTheCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} quantity={quantity}>
          <button
            style={{
              width: "200px",
              backgroundColor: "goldenrod",
              padding: "5px 10px",
              border: "1px solid gray",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
              margin: "10px 0",
            }}
            onClick={handleOrderReview}
          >
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;

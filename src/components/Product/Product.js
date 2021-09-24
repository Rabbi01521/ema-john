import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  // console.log(props.product)
  const { name, img, price, star, stock, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="name">
        <h3>{name}</h3>
        <p>By {seller}</p>
        <div className="details">
          <div className="price">
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button onClick={() => props.handleAddToCart(props.product)}>
              {element} add to cart
            </button>
          </div>
          <div className="feature">
            <p>
              <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
              ></Rating>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // products to be rendered on the UI
  const [displayProducts, setDisplayProducts] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  useEffect(() => {
    const getData = getStoredCart();
    console.log(getData);
    setQuantity(getData);
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
    const getData = getStoredCart();
    console.log(getData);
    setQuantity(getData);
    // setCart(getData);
  };

  // console.log(quantity);
  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} quantity={quantity}>
            <Link to={"/review"}>
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
              >
                Review Your Order
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;

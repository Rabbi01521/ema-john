import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className="" style={{ padding: "10px 5px", margin: "10px 5px" }}>
      <h5 style={{ margin: "10px 0" }}>{name}</h5>
      <p style={{ margin: "10px 0" }}>
        <b>Quantity: {quantity}</b>
      </p>
      <button
        onClick={() => handleRemove(key)}
        style={{
          width: "200px",
          backgroundColor: "goldenrod",
          padding: "5px 10px",
          border: "1px solid gray",
          borderRadius: "5px",
          cursor: "pointer",
          color: "white",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;

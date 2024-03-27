import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Clicked...");
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductCard;

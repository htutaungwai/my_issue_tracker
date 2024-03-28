import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
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

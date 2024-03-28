"use client";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("Clicked...");
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;

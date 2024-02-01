import React from "react";
import Product from "./Product";

export default function List({ products,onItemClick }) {
  return products.map((product) => <Product onItemClick={onItemClick} key={product.id} product={product}></Product>);
}

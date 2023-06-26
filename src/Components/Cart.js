import React from "react";

const Cart = ({ cartProducts }) => {
    return (
        <div>
        <h2>Cart</h2>
        <p>Number of Products: {cartProducts.length}</p>
        <ul>
          {cartProducts.map((product, index) => (
            <li key={index}>
              <p>Product {index + 1}</p>
              <p>Shoe Name: {product.shoeName}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Sizes: {JSON.stringify(product.sizes)}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Cart;
import React from 'react';
const ProductDetails = ({ products,addToCart }) => {
    return (
      <div>
        <h2>Product Details:</h2>
        {products.map((product, index) => (
          <div key={index}>
            <p>Product {index + 1}:</p>
            <p>Shoe Name: {product.shoeName}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Sizes: {JSON.stringify(product.sizes)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  export default ProductDetails;
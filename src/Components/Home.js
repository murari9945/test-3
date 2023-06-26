import React, { useState,useEffect } from "react";

import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [shoeName, setShoeName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [sizes, setSizes] = useState({
      L: false,
      M: false,
      S: false
    });
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://crudcrud.com/api/46dd3569f05c49c891b86edd32a954a0/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
  
    
    const handleShoeNameChange = (e) => {
        setShoeName(e.target.value);
      };
    
      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      };
    
      const handlePriceChange = (e) => {
        setPrice(e.target.value);
      };
    
      const handleSizeChange = (size) => {
        setSizes((prevSizes) => ({
          ...prevSizes,
          [size]: !prevSizes[size]
        }));
      };
  
    const handleAddProduct = async () => {
      const newProduct = {
        shoeName,
        description,
        price,
        sizes
      };
  
      try {
        const response = await axios.post("https://crudcrud.com/api/46dd3569f05c49c891b86edd32a954a0/products", newProduct);
        setProducts((prevProducts) => [...prevProducts, response.data]);
      } catch (error) {
        console.log("Error adding product:", error);
      }
  
      setShoeName("");
      setDescription("");
      setPrice("");
      setSizes({
        L: false,
        M: false,
        S: false
      });
    };
    const addToCart = async (product) => {
       // try {
       //   await axios.post("https://crudcrud.com/api/46dd3569f05c49c891b86edd32a954a0/products", product);
        setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
       // } catch (error) {
       //   console.log("Error adding product to cart:", error);
       // }
      };
  
    return (
      <section>
        <div>
          <label>Shoe Name</label>
          <input type="text" value={shoeName} onChange={handleShoeNameChange} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <h3>Quantity Available</h3>
          <div>
            <label>L</label>
            <input type="checkbox" checked={sizes.L} onChange={() => handleSizeChange("L")} />
          </div>
          <div>
            <label>M</label>
            <input type="checkbox" checked={sizes.M} onChange={() => handleSizeChange("M")} />
          </div>
          <div>
            <label>S</label>
            <input type="checkbox" checked={sizes.S} onChange={() => handleSizeChange("S")} />
          </div>
        </div>
        <div>
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
  
        <ProductDetails products={products} addToCart={addToCart} />
        <Cart cartProducts={cartProducts} />
      </section>
    );
  };
  
  export default Home;



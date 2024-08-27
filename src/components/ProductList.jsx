import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../utils/get-products";
import "../styles/product-list.css";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const productList = await getAllProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {isLoading ? (
        <p className="loading">Loading products</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <Link
                to={`/home/productos/${product.id}`}
                className="product-details-btn"
              >
                Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

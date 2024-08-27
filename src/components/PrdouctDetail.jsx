import React, { useState, useEffect } from "react";
import { getProductById } from "../utils/get-products";
import "../styles/product-list.css";

export function PrdouctDetail({ id }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const productData = await getProductById(parseInt(id));
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-list">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

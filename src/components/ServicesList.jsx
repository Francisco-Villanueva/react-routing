import React, { useState, useEffect } from "react";
import { getAllServices } from "../utils/get-services";
import "../styles/product-list.css";

export function ServicesList() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const serviceList = await getAllServices();
        setServices(serviceList);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="product-list">
      <h2>Services List</h2>
      {isLoading ? (
        <p className="loading">Loading services</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h3>{service.name}</h3>
              <p>Price: ${service.price}</p>
              <p>Category: {service.category}</p>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

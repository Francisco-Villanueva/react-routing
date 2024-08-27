import React from "react";
import { NavLinks } from "../components";
import { Route, Routes } from "react-router-dom";
import { Products } from "./Prodcuts";
import { Services } from "./Services";
import { Contact } from "./Contact";

export function Home() {
  return (
    <div className="app-container">
      <NavLinks />
      <seciton className="content">
        <Routes>
          <Route index element={<div>Home Page</div>} />
          <Route path="productos" element={<Products />} />
          <Route path="servicios" element={<Services />} />
          <Route path="contacto" element={<Contact />} />
        </Routes>
      </seciton>
    </div>
  );
}

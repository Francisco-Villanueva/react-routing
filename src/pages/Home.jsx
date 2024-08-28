import React, { useEffect } from "react";
import { NavLinks, Welcome } from "../components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Products } from "./Prodcuts";
import { Services } from "./Services";
import { Contact } from "./Contact";
import ProductDetailPage from "./ProductDetailPage";
import { NotFound } from "./NotFound";

export function Home() {
  const nav = useNavigate();

  useEffect(() => {
    // validamos si existe un usuario loguead, y si no es asi
    // lo mandamos al login.
    // nav("/login");
  }, []);

  return (
    <div className="app-container">
      <NavLinks />
      <seciton className="content">
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="productos" element={<Products />} />
          <Route path="productos/:productId" element={<ProductDetailPage />} />
          <Route path="servicios" element={<Services />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </seciton>
    </div>
  );
}

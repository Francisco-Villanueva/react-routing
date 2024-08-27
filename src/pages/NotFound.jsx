import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "../styles/nout-found.css";

export function NotFound() {
  return (
    <div className="not-found-container">
      <FaExclamationTriangle className="not-found-icon" />
      <h1 className="not-found-title">404 - Página no encontrada</h1>
      <p className="not-found-message">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link to="/home" className="not-found-link">
        Volver al inicio
      </Link>
    </div>
  );
}

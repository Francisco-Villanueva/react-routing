import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import React from "react";
import { FaHome, FaBox, FaCogs, FaEnvelope } from "react-icons/fa";
import { useUser } from "../hooks";

export function NavLinks() {
  const user = useUser();

  console.log("user context", user);
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <FaHome /> Inicio
            </Link>
          </li>
          <li>
            <Link to="productos">
              <FaBox /> Productos
            </Link>
          </li>
          <li>
            <Link to="servicios">
              <FaCogs /> Servicios
            </Link>
          </li>
          <li>
            <Link to="contacto">
              <FaEnvelope /> Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

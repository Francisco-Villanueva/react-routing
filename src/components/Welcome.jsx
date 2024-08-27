import React from "react";
import "../styles/welcome.css";

export function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Bienvenido a nuestra aplicación</h1>
      <p className="welcome-message">
        Estamos encantados de tenerte aquí. Explora nuestros productos y
        servicios para descubrir todo lo que tenemos para ofrecerte.
      </p>
      <div className="welcome-features">
        <div className="feature">
          <i className="fas fa-shopping-cart"></i>
          <h3>Productos de calidad</h3>
          <p>
            Descubre nuestra amplia gama de productos cuidadosamente
            seleccionados.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-concierge-bell"></i>
          <h3>Servicios excepcionales</h3>
          <p>
            Experimenta nuestros servicios de primera clase diseñados para
            satisfacer tus necesidades.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-headset"></i>
          <h3>Soporte al cliente</h3>
          <p>
            Nuestro equipo está siempre listo para ayudarte con cualquier
            consulta.
          </p>
        </div>
      </div>
      <button className="cta-button">Comienza a explorar</button>
    </div>
  );
}

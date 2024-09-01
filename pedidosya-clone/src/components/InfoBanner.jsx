import React from 'react';
import './InfoBanner.css'; // Crea este archivo para los estilos específicos

const InfoBanner = () => {
  return (
    <div className="info-banner">
      <div className="info-banner-image">
        <img src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/desktop/tops.png?width=400&dpi=1.5" alt="Promoción" /> {/* Asegúrate de tener la imagen correcta en la ruta */}
      </div>
      <div className="info-banner-text">
        <div className="info-item">
          <img src="/src/assets/location-icon.png" alt="Top Ciudades" className="info-icon" /> {/* Icono de ciudades */}
          <div>
            <h4>Top Ciudades</h4>
            <p>Santa Cruz de la Sierra, La Paz, Cochabamba, El Alto, Sucre, Tarija.</p>
          </div>
        </div>
        <div className="info-item">
          <img src="/src/assets/food-icon.png" alt="Top Comidas" className="info-icon" /> {/* Icono de comidas */}
          <div>
            <h4>Top Comidas</h4>
            <p>Pollo, Hamburguesas, Pizzas, Carnes, Postres, Menú del día.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;

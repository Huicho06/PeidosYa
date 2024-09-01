import React from 'react';
import Slider from 'react-slick';
import './TopOrdersCarousel.css'; // Crea este archivo para los estilos específicos

const topOrders = [
  {
    title: 'La Fábrica De Biancaflor',
    image: '/src/assets/biancaflor.png', // Ruta a la imagen del producto
    rating: '4.4',
    time: '20-35 min',
    envio: 'Envío Bs. 10',
  },
  {
    title: 'Pollos Campeón - Cañoto',
    image: '/src/assets/campeon.png', // Ruta a la imagen del producto
    rating: '4.3',
    time: '30-45 min',
    envio: 'Envío Bs. 4',
  },
  {
    title: 'La Ollita Del Sabor - Av Busch',
    image: '/src/assets/ollita.png', // Ruta a la imagen del producto
    rating: '4.3',
    time: '15-30 min',
    envio: 'Envío Bs. 7',
  },
  {
    title: 'Churrasquería Santa Cruz',
    image: '/src/assets/churrasquería.png', // Ruta a la imagen del producto
    rating: '4.3',
    time: '15-30 min',
    envio: 'Envío Bs. 7',
  },
  // Agrega más elementos según sea necesario
];

const TopOrdersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="top-orders-carousel">
      <h2>Los más pedidos esta semana</h2>
      <Slider {...settings}>
        {topOrders.map((order, index) => (
          <div key={index} className="order-card">
            <img src={order.image} alt={order.title} className="order-image" />
            <div className="order-info">
              <p className="order-title">{order.title}</p>
              <div className="order-details">
                <span>{order.time} · {order.envio}</span>
                <span className="order-rating">★ {order.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopOrdersCarousel;

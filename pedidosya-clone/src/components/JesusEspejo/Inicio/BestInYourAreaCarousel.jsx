import React from 'react';
import Slider from 'react-slick';
import './BestInYourAreaCarousel.css'; // Crea este archivo para los estilos específicos

const bestInYourArea = [
  {
    title: 'Pizza Rio - Blacutt',
    image: '/src/assets/pizzario.png', // Ruta a la imagen del producto
    rating: '4.5',
    time: '10-25 min',
    envio: 'Envío Bs. 5',
  },
  {
    title: 'Steel Container Grill & Bar',
    image: '/src/assets/steelcontainer.png', // Ruta a la imagen del producto
    rating: '4.2',
    time: '30-45 min',
    envio: 'Envío Bs. 7',
  },
  {
    title: 'Las Amiguis',
    image: '/src/assets/lasamiguis.png', // Ruta a la imagen del producto
    rating: '4.5',
    time: '20-35 min',
    envio: 'Envío Bs. 11',
  },
  {
    title: 'El Jardín de los Pollos',
    image: '/src/assets/jardinPollos.png', // Ruta a la imagen del producto
    rating: '4.5',
    time: '20-35 min',
    envio: 'Envío Bs. 14',
  },
  {
    title: 'Solo Pique',
    image: '/src/assets/pique.png', // Ruta a la imagen del producto
    rating: '4.5',
    time: '20-35 min',
    envio: 'Envío Bs. 11',
  },
  // Agrega más elementos según sea necesario
];

const BestInYourAreaCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="best-in-your-area-carousel">
      <h2>Los mejores de tu zona</h2>
      <Slider {...settings}>
        {bestInYourArea.map((item, index) => (
          <div key={index} className="area-card">
            <img src={item.image} alt={item.title} className="area-image" />
            <div className="area-info">
              <p className="area-title">{item.title}</p>
              <div className="area-details">
                <span>{item.time} · {item.envio}</span>
                <span className="area-rating">★ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestInYourAreaCarousel;

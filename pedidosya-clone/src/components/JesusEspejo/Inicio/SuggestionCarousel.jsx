import React from 'react';
import Slider from 'react-slick';
import './SuggestionCarousel.css'; // Crea este archivo para los estilos específicos

const suggestions = [
  { title: 'Burger King', image: '/src/assets/burgerking.jpg', envio: 'Envío Bs. 4' },
  { title: 'Sakura', image: '/src/assets/sakura.jpg', envio: 'Envío Bs. 5' },
  { title: 'Hot Burger', image: '/src/assets/hotburguer.jpg', envio: 'Envío Bs. 7' },
  { title: 'Café Capital', image: '/src/assets/capital.jpg', envio: 'Envío Bs. 4' },
  { title: 'Santa Cruz', image: '/src/assets/churrasquería2.jpg', envio: 'Envío Bs. 5' },
  { title: 'Campeón Pollos', image: '/src/assets/campeon2.jpg', envio: 'Envío Bs. 4' },
  { title: 'Bianca', image: '/src/assets/bianca.jpg', envio: 'Envío Bs. 10' },
  { title: 'KFC', image: '/src/assets/kfc.jpg', envio: 'Envío Bs. 5' },
  { title: 'La Ollita del Sabor', image: '/src/assets/ollita2.jpeg', envio: 'Envío Bs. 7' },
];

const SuggestionCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <div className="suggestion-carousel">
      <h2>Te sugerimos</h2>
      <Slider {...settings}>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-card">
            <img src={suggestion.image} alt={suggestion.title} className="suggestion-image" />
            <p className="suggestion-title">{suggestion.title}</p>
            <p className="suggestion-envio">{suggestion.envio}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuggestionCarousel;

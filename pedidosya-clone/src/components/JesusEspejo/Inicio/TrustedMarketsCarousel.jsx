import React from 'react';
import Slider from 'react-slick';
import './TrustedMarketsCarousel.css'; // Crea este archivo para los estilos específicos

const trustedMarkets = [
  {
    title: 'BFC',
    image: '/src/assets/bfc.png', // Ruta a la imagen del mercado
    envio: 'Envío Bs. 6',
    discount: ''
  },
  {
    title: 'La Cuadra',
    image: '/src/assets/lacuadra.png',
    envio: 'Envío Bs. 9',
    discount: 'Hasta 10% DTO'
  },
  {
    title: 'Mr. Bread',
    image: '/src/assets/mrbread.png',
    envio: 'Envío Bs. 9',
    discount: ''
  },
  {
    title: 'Panessa',
    image: '/src/assets/panessa.png',
    envio: 'Envío Bs. 7',
    discount: 'Hasta 42% DTO'
  },
  {
    title: 'Kawka',
    image: '/src/assets/kawka.png',
    envio: 'Envío Bs. 8',
    discount: ''
  },
  {
    title: 'Fidalga',
    image: '/src/assets/fidalga.png',
    envio: 'Envío Bs. 9',
    discount: 'Hasta 22% DTO'
  },
  {
    title: 'PedidosYa Market',
    image: '/src/assets/pedidosyamarket.png',
    envio: 'Envío Bs. 7',
    discount: 'Hasta 70% DTO'
  },
  // Agrega más mercados si es necesario
];

const TrustedMarketsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="trusted-markets-carousel">
      <h2>Mercados de confianza</h2>
      <Slider {...settings}>
        {trustedMarkets.map((market, index) => (
          <div key={index} className="market-card">
            <img src={market.image} alt={market.title} className="market-image" />
            {market.discount && <div className="market-discount">{market.discount}</div>}
            <div className="market-info">
              <p className="market-title">{market.title}</p>
              <span className="market-envio">{market.envio}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrustedMarketsCarousel;

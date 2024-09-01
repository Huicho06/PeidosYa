import React from 'react';
import Slider from 'react-slick';

const HomeDeliveryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const items = [
    { title: 'Venko - Centro', image: '/src/assets/isabelita.jpg', time: '10-25 min' },
    { title: 'Breick - Megacenter Scz', image: '/src/assets/breick.jpg', time: '10-25 min' },
    { title: 'Minimarkets - La Choca', image: '/src/assets/wow.png', time: '10-25 min' },
    { title: 'Frutas Faby - Mercado Abasto A...', image: '/src/assets/verduras.png', time: '20-35 min' },
    { title: 'Farmacorp Sala - Equipetrol', image: '/src/assets/amarket.jpg', time: '15-30 min' },
    { title: 'Mr. Bread - Hamacas', image: '/src/assets/bread.jpeg', time: '25-40 min' },
    // Agrega más items según sea necesario
  ];

  return (
    <div>
      <h2>Tus compras desde casa</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="delivery-card">
            <div className="delivery-card-content">
              <img src={item.image} alt={item.title} className="delivery-card-image" />
              <div className="delivery-card-info">
                <h3>{item.title}</h3>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeDeliveryCarousel;

import React from 'react';
import Slider from 'react-slick';
import CategoryCard from './CategoryCard'; // Asegúrate de que este componente exista

const categories = [
  { title: 'Restaurantes', image: '/src/assets/restaurants.png' },
  { title: 'Café & Postres', image: '/src/assets/cafe.png' },
  { title: 'Farmacias', image: '/src/assets/pharmacy.png' },
  { title: 'Supermercados', image: '/src/assets/supermarkets.png' },
  { title: 'Retiro en local', image: '/src/assets/pickup.png' },
  { title: 'Bebidas', image: '/src/assets/drinks.png' },
  { title: 'Tiendas', image: '/src/assets/stores.png' }, // Nueva categoría: Tiendas
  { title: 'Mascotas', image: '/src/assets/pets.png' }   // Nueva categoría: Mascotas
];

const CategoryCarousel = () => {
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Hola. ¿Qué vas a pedir hoy?</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} image={category.image} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;

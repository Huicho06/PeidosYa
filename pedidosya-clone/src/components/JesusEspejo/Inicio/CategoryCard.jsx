import React from 'react';

const CategoryCard = ({ title, image }) => (
  <div className="category-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default CategoryCard;

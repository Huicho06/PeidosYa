import React from 'react';

const PromotionBanner = ({ image }) => (
  <div className="promotion-banner">
    <img src={image} alt="Promoción" className="promotion-image" />
  </div>
);

export default PromotionBanner;

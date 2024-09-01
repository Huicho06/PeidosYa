import Navbar from "../../JesusEspejo/Inicio/Navbar";
import CategoryCarousel from "../../JesusEspejo/Inicio/CategoryCarousel";
import PromotionBanner from "../../JesusEspejo/Inicio/PromotionBanner";
import SuggestionCarousel from "../../JesusEspejo/Inicio/SuggestionCarousel";
import TopOrdersCarousel from "../../JesusEspejo/Inicio/TopOrdersCarousel";
import BestInYourAreaCarousel from "../../JesusEspejo/Inicio/BestInYourAreaCarousel";
import HomeDeliveryCarousel from "../../JesusEspejo/Inicio/HomeDeliveryCarousel";
import Footer from "../../JesusEspejo/Inicio/Footer";


const promotions = [
  { title: 'Restaurantes', description: '¡Disfruta estas promociones!', image: '/src/assets/promo1.png' },
  { title: 'Medios de pago', description: '¡Conoce todas las opciones de ahorro!', image: '/src/assets/promo2.png' },
];

const Home = () => (
  <div>
    <Navbar />
    <div className="container">
      <div style={{ padding: '20px' }}>
        <CategoryCarousel />
        <h2>No te pierdas estas promociones</h2>
        <div className="promotion-container">
          {promotions.map((promo, index) => (
            <PromotionBanner key={index} title={promo.title} description={promo.description} image={promo.image} />
          ))}
        </div>
        <SuggestionCarousel />
        <TopOrdersCarousel />
        <BestInYourAreaCarousel />
        <HomeDeliveryCarousel />
      </div>
      <img
        src="/src/assets/banner.png"
        alt="Captura de pantalla de la sección"
        style={{ width: '100%', maxWidth: '1920px', display: 'block' }}
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0 auto' }}></div>

    {/* Contenedor de la captura de pantalla */}
    <div className="full-width-image-container">
      <img src="/src/assets/footerCafe.png" alt="Footer" className="full-width-image" />
    </div>
    
    <Footer />
  </div>
);

export default Home;

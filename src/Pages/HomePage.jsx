import Banner from '../Components/Banner/Banner';
import ProductsOnOffer from '../Components/ProductCard/ProductsOnOffer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner-container">
        <Banner />
      </div>
      <div className="Products-offer-container">
        <h2>Hola</h2>
        <ProductsOnOffer />
      </div>
    </div>
  );
};

export default HomePage;

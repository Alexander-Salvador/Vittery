import Banner from '../../Components/Banner/Banner';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="product-card-container">
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;

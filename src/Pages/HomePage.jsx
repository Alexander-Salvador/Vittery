import Banner from '../Components/Banner/Banner';
import ProductSection from './Products/ProductSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner-container">
        <Banner />
      </div>
      {/* <div className="Product-container">
        <ProductSection />
      </div> */}
    </div>
  );
};

export default HomePage;

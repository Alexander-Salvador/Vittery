import Banner from '../Components/Banner/Banner';
import ProductsOnOffer from '../Components/ProductCard/ProductsOnOffer';
import CategoryProducts from '../Components/CategoryProducts/CategoryProducts';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage__container">
      <div className="banner-container">
        <Banner />
      </div>
      <div className="category-container">
        <CategoryProducts />
      </div>
      <div className="Products-offer-container">
        <h2>Hola</h2>
        <ProductsOnOffer />
      </div>
    </div>
  );
};

export default HomePage;

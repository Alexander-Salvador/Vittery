import Banner from '../Components/Banner/Banner';
import CategoryProducts from '../Components/CategoryProducts/CategoryProducts';
import ProductsOnOffer from '../Components/ProductCard/ProductsOnOffer';
import GeneralProducts from '../Components/ProductCard/GeneralProducts';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage__container">
      <div className="homepage__container-sections">
        <div className="banner-container">
          <Banner />
        </div>
        <div className="category-container">
          <CategoryProducts />
        </div>
        <div className="GeneralProducts-container">
          <GeneralProducts />
        </div>
        <div className="Products-offer-container">
          <h2>Hola</h2>
          <ProductsOnOffer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

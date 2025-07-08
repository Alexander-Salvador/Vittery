import Banner from '../Components/Banner/Banner';
import GeneralProducts from '../Components/ProductCard/GeneralProducts';
import CategoryElectroTecnologia from '../Components/CategoryElectroTecnologia/CategoryElectroTecnologia';
import CategoryProducts from '../Components/CategoryProducts/CategoryProducts';
import CallToActionDelivery from '../Components/ProductsCallToActions/CallToActionDelivery';
import './HomePage.css';
import CategoryHomeDecoration from '../Components/CategoryHomeDecoration/CategoryHomeDecoration';
import CategorySuperMarket from '../Components/CategorySuperMarket/CategorySuperMarket';

const HomePage = () => {
  return (
    <div className="homepage__container">
      <div className="banner-hcontainer">
        <Banner />
      </div>

      <div className="categoryProducts__hcontainer">
        <CategoryProducts />
      </div>

      <div className="GeneralProducts-hcontainer">
        <GeneralProducts />
      </div>

      <div className="callToAction__hcontainer">
        <CallToActionDelivery />
      </div>

      <div className="CategoryElectroTecnologia-hcontainer">
        <CategoryElectroTecnologia />
      </div>

      <div className="CategoryHomeDecoration-hcontainer">
        <CategoryHomeDecoration />
      </div>

      <div className="CategorySuperMarket-hcontainer">
        <CategorySuperMarket />
      </div>
    </div>
  );
};

export default HomePage;

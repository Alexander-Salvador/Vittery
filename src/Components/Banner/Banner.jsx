import { MdDeliveryDining } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import { CiShoppingTag } from 'react-icons/ci';

import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__description-right">
        <div className="banner__delivery">
          <MdDeliveryDining className="banner-delivery-icon" />
          <h3 className="banner-delivery-text">
            Entrega gratuita en pedidos de S/ 99.90
          </h3>
        </div>
        <h2 className="banner__title">
          Todo para tu día a día, en un solo
          <span className="banner-delivery-span"> clic.</span>
        </h2>
        <p className="banner-description">
          Viterrys selecciona lo mejor en alimentos, moda y tecnología para ti.
          <br />
          Disfruta un 30% de descuento y una experiencia de compra única. <br />
          Porque tu tiempo vale.
        </p>

        <div className="banner__button-container">
          <div className="banner__button-left">
            <FiShoppingBag className="banner__button-left-icon" />
            <h3 className="banner-button-left-text"> Descubrir productos</h3>
          </div>

          <div className="banner__button-right">
            <CiShoppingTag className="banner__button-right-icon" />
            <h3 className="banner-button-right-text"> Descubrir productos →</h3>
          </div>
        </div>
      </div>
      <div className="banner__image-left"> </div>
    </section>
  );
};

export default Banner;

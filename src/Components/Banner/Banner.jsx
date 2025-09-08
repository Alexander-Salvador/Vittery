import { MdLocalShipping, MdAccessTime, MdVerifiedUser } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import './Banner.css';

const Banner = () => {
  return (
    <section
      className="banner__container-general"
      role="region"
      aria-label="Promoción destacada de Viterrysd">
      <div className="banner__grid">
        {/* Columna izquierda */}
        <div className="banner__left">
          <div className="banner__label">
            <MdLocalShipping className="label__icon" aria-hidden="true" />
            <span>Envío gratis en pedidos superiores a S/ 50</span>
          </div>

          <h1 className="banner__title">
            Tu mercado de <br />
            <span className="highlight">confianza, ahora digital</span>
          </h1>

          <p className="banner__subtitle">
            Descubre la frescura y calidad que caracteriza a Viterrys,
            <br />
            con la comodidad de comprar desde tu hogar.
          </p>

          <div className="banner__buttons">
            <button
              className="btn btn-primary"
              aria-label="Comprar ahora en Viterrys">
              <BsBoxSeam className="btn-icon" />
              Comprar ahora
            </button>
            <button
              className="btn btn-outline"
              aria-label="Ver ofertas destacadas">
              Ver ofertas
            </button>
          </div>

          <div className="banner__benefits">
            <div className="benefit-item">
              <MdLocalShipping className="benefit-icon" aria-hidden="true" />
              <p className="benefit-text">Envío rápido</p>
            </div>
            <div className="benefit-item">
              <MdAccessTime className="benefit-icon" aria-hidden="true" />
              <p className="benefit-text">Entrega 24/7</p>
            </div>
            <div className="benefit-item">
              <MdVerifiedUser className="benefit-icon" aria-hidden="true" />
              <p className="benefit-text">100% Seguro</p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="banner__right">
          <div className="banner__image-wrapper">
            <img
              src="/images/Banner/banner-especial.jpg"
              alt="Vista de frutas frescas en supermercado"
              className="banner__image"
              loading="lazy"
            />

            <div className="floating-tag top-right">
              <img
                src="/images/Categories/categories-supermarket.jpg"
                alt="Fruta fresca del campo"
                loading="lazy"
              />
              <div>
                <h4>Frutas frescas</h4>
                <p>Directo del campo</p>
              </div>
            </div>

            <div className="floating-tag bottom-left">
              <img
                src="/images/Categories/categories-groceries.jpg"
                alt="Frutas 100% orgánicas"
                loading="lazy"
              />
              <div>
                <h4>100% Orgánico</h4>
                <p>Calidad garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

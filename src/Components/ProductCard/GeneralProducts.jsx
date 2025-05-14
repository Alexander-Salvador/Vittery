import './GeneralProducts.css';
import { FaArrowRight } from 'react-icons/fa';
import useProductManager from '../../hooks/Products/useProductManager';

const GeneralProducts = () => {
  const { products, error, loading } = useProductManager();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0)
    return <p>No hay productos disponibles.</p>;

  return (
    <div className="generalProducts__container">
      <div className="generalProducts__titles">
        <div className="generalProducts__left">
          <h2 className="generalProducts__title">Nuestros Productos</h2>
          <p className="generalProducts__description">
            Nuestros productos más vendidos y de tendencia
          </p>
        </div>
        <div className="generalProducts__right">
          <p className="generalProducts__right-text">Ver todos</p>
          <FaArrowRight className="generalProducts__right-icon" />
        </div>
      </div>

      <div className="generalProducts__container-card">
        {products.map((product) => (
          <div className="generalProducts__card" key={product.id}>
            <div className="generalProducts__card-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="generalProducts__card-image"
                onError={(e) => {
                  e.target.src = '/placeholder.jpg'; // imagen alternativa
                }}
              />
            </div>

            <div className="generalProducts__card-description-container">
              <h3 className="generalProducts__card-title">{product.name}</h3>
              <p className="generalProducts__card-price-online">
                Precio Online
              </p>
              <span className="generalProducts__card-price-online-value-online">
                <span className="generalProducts__card-price-online-value-online-symbol">
                  $/{' '}
                </span>
                {product.price}
              </span>

              <p className="generalProducts__price-normal">Precio Normal</p>
              <span className="generalProducts__price-normal-value-normal">
                <span className="generalProducts__price-normal-value-normal-symbol">
                  $/{' '}
                </span>
                {product.price}
              </span>

              {/* <button className="generalProducts__card-button">
                Agregar al carrito
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralProducts;

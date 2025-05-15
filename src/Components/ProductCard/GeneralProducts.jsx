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
                src={product.images.thumbnail}
                alt={product.title}
                className="generalProducts__card-image"
                onError={(e) => {
                  e.target.src = '/placeholder.jpg'; // imagen alternativa
                }}
              />
            </div>

            <div className="generalProducts__card-description-container">
              <span className="generalProducts__card-brand">
                {product.brand}
              </span>
              <h3 className="generalProducts__card-title">{product.title}</h3>
              <span className="generalProducts__card-tags">
                {product.tags.join(', ')}
              </span>

              {/* <p className="generalProducts__price">A solo</p> */}
              <span className="generalProducts__price-value">
                <span className="generalProducts__price-value-symbol">S/ </span>
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

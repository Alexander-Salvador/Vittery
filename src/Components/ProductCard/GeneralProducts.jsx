import { FaArrowRight } from 'react-icons/fa';
import { TfiShoppingCart } from 'react-icons/tfi';
import useProductManager from '../../hooks/Products/useProductManager';
import './GeneralProducts.css';

const GeneralProducts = () => {
  const { products, error, loading } = useProductManager();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0)
    return <p>No hay productos disponibles.</p>;

  const getDiscountPercent = (original, current) => {
    if (!original || original <= current) return null;
    return Math.round(((original - current) / original) * 100);
  };

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
        {products.map((product) => {
          const discount = getDiscountPercent(
            product.originalPrice,
            product.price
          );
          return (
            <div className="generalProducts__card" key={product.id}>
              <div className="image-containergp">
                {discount && (
                  <div className="discount-badgegp">{discount}% OFF</div>
                )}
  
                <img
                  src={product.images?.thumbnail}
                  alt={product.title}
                  className="product-imagegp"
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />

                <div className="cart-icon-gp-container">
                  <TfiShoppingCart className="cart-icongp-icon" />
                </div>
              </div>

              <div className="product-infogp">
                <div className="product-brandgp">{product.brand}</div>
                <h3 className="product-titlegp">{product.title}</h3>

                <div className="price-sectiongp">
                  <span className="price-currentgp">S/ {product.price}</span>
                  {product.originalPrice && (
                    <span className="price-originalgp">
                      S/ {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralProducts;

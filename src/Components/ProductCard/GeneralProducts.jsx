import { FaArrowRight, FaStar, FaRegStar } from 'react-icons/fa';
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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={`s${i}`} className="star filled" />);
    for (let i = 0; i < emptyStars; i++)
      stars.push(<FaRegStar key={`e${i}`} className="star empty" />);
    return stars;
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
              <div className="image-container">
                {discount && (
                  <div className="discount-badgegp">{discount}% OFF</div>
                )}

                <img
                  src={product.images?.thumbnail}
                  alt={product.title}
                  className="product-image"
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />

                <div className="cart-icon">
                  <TfiShoppingCart />
                </div>
              </div>

              <div className="product-info">
                <div className="rating">
                  {renderStars(product.rating)}
                  <span className="rating-number">({product.rating})</span>
                </div>

                <div className="product-brand">{product.brand}</div>
                <h3 className="product-title">{product.title}</h3>

                <div className="price-section">
                  <span className="price-current">S/ {product.price}</span>
                  {product.originalPrice && (
                    <span className="price-original">
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

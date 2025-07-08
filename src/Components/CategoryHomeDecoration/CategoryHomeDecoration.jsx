import './CategoryHomeDecoration.css';
import useProductByCategory from '../../hooks/Products/useProductByCategory';
import { FaKitchenSet } from 'react-icons/fa6';
import { FaExclamationCircle } from 'react-icons/fa';
import { TfiShoppingCart } from 'react-icons/tfi';

const CategoryHomeDecoration = () => {
  const { products, loading, error } =
    useProductByCategory('hogar y decoración');

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0)
    return <p>No hay productos disponibles.</p>;

  const getDiscountPercent = (original, current) => {
    if (!original || original <= current) return null;
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="CategoryHomeDecoration__container">
      <div className="CategoryHomeDecoration__titles-container">
        <div className="CategoryHomeDecoration__information">
          <FaKitchenSet className="CategoryHomeDecoration__information-icon" />
          <h2 className="CategoryHomeDecoration__information-title">
            HOGAR Y DECORACIÓN
          </h2>
          <button className="CategoryHomeDecoration__information-button">
            Ver todo
          </button>
        </div>
      </div>

      <div className="CategoryHomeDecoration__products-container">
        <div className="CategoryHomeDecoration__left2">
          <img
            src="/images/Categories/CategoryHomeDecoration.png"
            alt="Banner de Hogar y Decoración"
            className="CategoryHomeDecoration__banner"
          />
        </div>
      </div>

      <div className="CategoryHomeDecoration__container-card">
        {products.slice(0, 3).map((product) => {
          const discount = getDiscountPercent(
            product.originalPrice,
            product.price
          );
          return (
            <div className="CategoryHomeDecoration__card" key={product.id}>
              <div className="image-containerCHD">
                {discount && (
                  <div className="discount-badgeCHD">{discount}% OFF</div>
                )}

                <img
                  src={product.images?.thumbnail}
                  alt={product.title}
                  className="product-imageCHD"
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />

                <div className="cart-iconCHD">
                  <TfiShoppingCart />
                </div>
              </div>

              <div className="product-infoCHD">
                <div className="product-containerAllCHD">
                  <div className="product-containerTitlesCHD">
                    <div className="product-brandCHD">{product.brand}</div>
                    <h3 className="product-titleCHD">{product.title}</h3>
                  </div>

                  <div className="product-containerDeliveryCHD">
                    <FaExclamationCircle className="productAlertIconCHD" />
                    <h3 className="productAlertTitleCHD">
                      Despachado desde VITTERYS
                    </h3>
                  </div>

                  <div className="product-container-pricesCHD">
                    <div className="price-sectionOnlineCHD">
                      <span className="name-priceOnlineCHD">Precio Online</span>
                      {product.originalPrice && (
                        <span className="price-OnlineCHD">
                          S/ {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="price-sectionRegularCHD">
                      <span className="price-currentRegularCHD">
                        Precio Regular
                      </span>
                      {product.originalPrice && (
                        <span className="price-currentCHD">
                          S/ {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryHomeDecoration;

import './CategorySuperMarket.css';
import useProductByCategory from '../../hooks/Products/useProductByCategory';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FaExclamationCircle } from 'react-icons/fa';
import { TfiShoppingCart } from 'react-icons/tfi';

const CategorySuperMarket = () => {
  const { products, loading, error } = useProductByCategory('Supermercado');

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0)
    return <p>No hay productos disponibles.</p>;

  const getDiscountPercent = (original, current) => {
    if (!original || original <= current) return null;
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="CategorySuperMarket__container">
      <div className="CategorySuperMarket__titles-container">
        <div className="CategorySuperMarket__information">
          <IoFastFoodOutline className="CategorySuperMarket__information-icon" />
          <h2 className="CategorySuperMarket__information-title">
            HOGAR Y DECORACIÓN
          </h2>
          <button className="CategorySuperMarket__information-button">
            Ver todo
          </button>
        </div>
      </div>

      <div className="CategorySuperMarket__products-container">
        <div className="CategorySuperMarket__left2">
          <img
            src="/images/Categories/CategorySuperMarket.png"
            alt="Banner de Supermercado"
            className="CategorySuperMarket__banner"
          />
        </div>
      </div>

      <div className="CategorySuperMarket__container-card">
        {products.slice(0, 3).map((product) => {
          const discount = getDiscountPercent(
            product.originalPrice,
            product.price
          );
          return (
            <div className="CategorySuperMarket__card" key={product.id}>
              <div className="image-containerSPM">
                {discount && (
                  <div className="discount-badgeSPM">{discount}% OFF</div>
                )}

                <img
                  src={product.images?.thumbnail}
                  alt={product.title}
                  className="product-imageSPM"
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />

                <div className="cart-iconSPM">
                  <TfiShoppingCart />
                </div>
              </div>

              <div className="product-infoSPM">
                <div className="product-containerAllSPM">
                  <div className="product-containerTitlesSPM">
                    <div className="product-brandSPM">{product.brand}</div>
                    <h3 className="product-titleSPM">{product.title}</h3>
                  </div>

                  <div className="product-containerDeliverySPM">
                    <FaExclamationCircle className="productAlertIconSPM" />
                    <h3 className="productAlertTitleSPM">
                      Despachado desde VITTERYS
                    </h3>
                  </div>

                  <div className="product-container-pricesSPM">
                    <div className="price-sectionOnlineSPM">
                      <span className="name-priceOnlineSPM">Precio Online</span>
                      {product.originalPrice && (
                        <span className="price-OnlineSPM">
                          S/ {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="price-sectionRegularSPM">
                      <span className="price-currentRegularSPM">
                        Precio Regular
                      </span>
                      {product.originalPrice && (
                        <span className="price-currentSPM">
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

export default CategorySuperMarket;

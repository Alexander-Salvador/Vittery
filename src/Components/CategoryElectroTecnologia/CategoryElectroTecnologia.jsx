import './CategoryElectroTecnologia.css';
import useProductByCategory from '../../hooks/Products/useProductByCategory';
import { IoTvOutline } from 'react-icons/io5';
import { FaExclamationCircle } from 'react-icons/fa';

import { TfiShoppingCart } from 'react-icons/tfi';

const CategoryElectroTecnologia = () => {
  const { products, loading, error } = useProductByCategory('supermercado');

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0)
    return <p>No hay productos disponibles.</p>;

  const getDiscountPercent = (original, current) => {
    if (!original || original <= current) return null;
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="CategoryTecnologia__container">
      <div className="CategoryTecnologia__titles-container">
        <div className="CategoryTecnologia__information">
          <IoTvOutline className="CategoryTecnologia__information-icon" />
          <h2 className="CategoryTecnologia__information-title">TECNOLOGIA</h2>
          <button className="CategoryTecnologia__information-button">
            Ver todo
          </button>
        </div>
      </div>

      <div className="CategoryTecnologia__products-container">
        <div className="CategoryTecnologia__left2">
          <img
            src="/images/Categories/CategoryTecnology.png"
            alt="Banner de Tecnología"
            className="CategoryTecnologia__banner"
          />
        </div>
      </div>

      <div className="CategoryTecnologia__container-card">
        {products.slice(0, 3).map((product) => {
          const discount = getDiscountPercent(
            product.originalPrice,
            product.price
          );
          return (
            <div className="CategoryTecnologia__card" key={product.id}>
              <div className="image-containerCT">
                {discount && (
                  <div className="discount-badgeCT">{discount}% OFF</div>
                )}

                <img
                  src={product.images?.thumbnail}
                  alt={product.title}
                  className="product-imageCT"
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />

                <div className="cart-iconCT">
                  <TfiShoppingCart />
                </div>
              </div>

              


              <div className="product-infoCT">
                <div className="product-containerAllCT">
                  
                  <div className="product-containerTitlesCT">
                    <div className="product-brandCT">{product.brand}</div>
                    <h3 className="product-titleCT">{product.title}</h3>
                  </div>

                  <div className="product-containerDeliveryCT">
                    <FaExclamationCircle className="productAlertIconCT" />
                    <h3 className="productAlertTitleCT">
                      Despachado desde VITTERYS
                    </h3>
                  </div>

                  <div className="product-container-pricesCT">
                    <div className="price-sectionOnlineCT">
                      <span className="name-priceOnlineCT">Precio Online</span>
                      {product.originalPrice && (
                        <span className="price-OnlineCT">
                          S/ {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="price-sectionRegularCT">
                      <span className="price-currentRegularCT">
                        Precio Regular
                      </span>
                      {product.originalPrice && (
                        <span className="price-currentCT">
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

export default CategoryElectroTecnologia;

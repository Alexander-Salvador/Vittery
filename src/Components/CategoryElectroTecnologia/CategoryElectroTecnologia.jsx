import './CategoryElectroTecnologia.css';
import useProductByCategory from '../../hooks/Products/useProductByCategory';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { IoTvOutline } from 'react-icons/io5';
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
    <div className="CategoryTecnologia__container">
      <div className="CategoryTecnologia__titles-container">
        <div className="CategoryTecnologia__information">
          <IoTvOutline className="CategoryTecnologia__information-icon" />
          <h2 className="CategoryTecnologia__information-title">TECNOLOGIA</h2>
          <button className="CategoryTecnologia__information-button">Ver todo</button>
        </div>
      </div>

      <div className="CategoryTecnologia__products-container">
        <div className="CategoryTecnologia__left2">
          <h2 className="CategoryTecnologia__title2">Nuestros Productos</h2>
          <p className="CategoryTecnologia__description2">
            Nuestros productos más vendidos y de tendencia
          </p>
        </div>
      </div>

      <div className="CategoryTecnologia__container-card">
        {products.map((product) => {
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
                <div className="ratingCT">
                  {renderStars(product.rating)}
                  <span className="rating-numberCT">({product.rating})</span>
                </div>

                <div className="product-brandCT">{product.brand}</div>
                <h3 className="product-titleCT">{product.title}</h3>

                <div className="price-sectionCT">
                  <span className="price-currentCT">S/ {product.price}</span>
                  {product.originalPrice && (
                    <span className="price-originalCT">
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

export default CategoryElectroTecnologia;

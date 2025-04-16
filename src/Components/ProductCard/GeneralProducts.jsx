import './GeneralProducts.css';

const GeneralProducts = ({ product }) => {
  if (!product) return null;

  return (
    <div className="products-container">
      <div className="product-card-top">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          onError={(e) => {
            e.target.src = '/placeholder.jpg'; // Asegúrate de tener una imagen placeholder
          }}
        />
      </div>

      <div className="product-card-bottom">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price-online">Precio Online</p>

        <span className="product-card-price-online-value-online">
          <span className="product-card-price-online-value-online-symbol">
            {'$/ '}
          </span>
          {product.price}
        </span>

        <p className="product-card-price-normal">Precio Normal</p>
        <span className="product-card-price-normal-value-normal">
          <span className="product-card-price-normal-value-normal-symbol">
            {'$/ '}
          </span>
          {product.price}
        </span>

        <button className="product-card-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default GeneralProducts;

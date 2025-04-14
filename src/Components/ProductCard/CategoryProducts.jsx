import './CategoryProducts.css';

const CategoryProducts = ({ product }) => {
  return (
    <div className="products-container">
      <div className="product-card-top">
        <img
          src={products.image}
          alt={products.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-bottom">
        <h3 className="product-card-title">{products.name}</h3>
        <p className="product-card-price-online">Precio Online</p>

        <span className="product-card-price-online-value-online">
          <span className="product-card-price-online-value-online-symbol">
            {'$/ '}
          </span>
          {products.price}
        </span>

        <p className="product-card-price-normal">Precio Normal</p>
        <span className="product-card-price-normal-value-normal">
          <span className="product-card-price-normal-value-normal-symbol">
            {'$/ '}
          </span>
          {products.price}
        </span>

        <button className="product-card-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CategoryProducts;

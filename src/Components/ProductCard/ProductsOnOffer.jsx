import './ProductsOnOffer.css';

const ProductsOnOffer = ({ product }) => {
  return (
    <div className="productsOffer-container">
      {products.map((product) => (
        <div className="product-card" key={products.id}>
          <div className="product-card-top">
            <img
              src={products.image}
              alt={products.name}
              className="product-card-image"
            />
          </div>

          <div className="product-card-bottom">
            <span>{products.name}</span>
            <p>Precio: ${products.offerPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsOnOffer;

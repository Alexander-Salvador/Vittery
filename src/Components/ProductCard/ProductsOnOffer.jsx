import './ProductsOnOffer.css';
import useProductOffer from '../../hooks/Products/useProductOffer';

const ProductsOnOffer = () => {
  const { offers, loading, error } = useProductOffer();

  if (loading) return <p>Cargando productos en oferta...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!offers || offers.length === 0) {
    return <p>No hay productos en oferta en este momento.</p>;
  }

  return (
    <div className="productsOffer-container">
      {offers.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-card-top">
            <img
              src={product.image}
              alt={product.name}
              className="product-card-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder.jpg';
              }}
            />
          </div>

          <div className="product-card-bottom">
            <span className="product-name">{product.name}</span>
            <div className="product-card-bottom-flex">
              <div className="product-buy-button">
                <button className="button-buy-now">Comprar</button>
              </div>
              <div className="product-prices">
                <p className="offer-price">
                  <span className="product-span-price"> Oferta:</span> S/.
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsOnOffer;

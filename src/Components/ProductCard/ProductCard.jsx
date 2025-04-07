import { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ categoryFilter = 'all' }) => {
  const [products, setProducts] = useState([]);

  // Función temporal que no hace nada hasta implementar la lógica
  const addToCart = () => {
    console.log('Función addToCart no implementada aún');
  };

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filtrar productos por categoría si se proporciona un filtro
  const filteredProducts =
    categoryFilter === 'all'
      ? products
      : products.filter((product) => product.category === categoryFilter);

  return filteredProducts.map((product) => {
    return (
      <div key={product.id} className="product-card">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <h3 className="product-card-title">{product.name}</h3>

        <div className="product-card-price-container-online">
          <p className="product-card-price-online">Precio Online</p>

          <span className="product-card-price-online-value-online">
            <span className="product-card-price-online-value-online-symbol">
              {'$/ '}
            </span>
            {product.price}
          </span>
        </div>

        <div className="product-card-price-container-normal">
          <p className="product-card-price-normal">Precio Normal</p>
          <span className="product-card-price-normal-value-normal">
            <span className="product-card-price-normal-value-normal-symbol">
              {'$/ '}
            </span>
            {product.price}
          </span>
        </div>

        <div className="product-card-button-container">
          <button
            className="product-card-button"
            onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  });
};

export default ProductCard;

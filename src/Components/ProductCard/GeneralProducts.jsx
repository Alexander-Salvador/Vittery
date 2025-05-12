import './GeneralProducts.css';
import useProductManager from '../../hooks/Products/useProductManager';

const GeneralProducts = ({ product }) => {
  const { loading, error } = useProductManager(product);
  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No hay producto disponible.</p>;
  if (product.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div className="generalProducts__container">
      <div className="generalProducts__titles">
        <div className="generalProducts__left">
          <h2 className="generalProducts__title">Categorías</h2>
          <p className="generalProducts__description">
            Explora una amplia variedad de categorías para encontrar lo que
            necesitas.
          </p>
        </div>
        <div className="generalProducts__right">
          <p className="generalProducts__right-text">
            Explora todas las categorías
          </p>
          <FaArrowRight className="generalProducts__right-icon" />
        </div>
      </div>

      <div className="generalProducts__card">
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
    </div>
  );
};

export default GeneralProducts;

// Nos quedamos en la parte de los productos.
// En el archivo GeneralProducts.jsx, hemos creado un componente que muestra los productos de forma individual.
// Este componente recibe un producto como prop y muestra su imagen, nombre y precios.
// Nos falta integrar este componente en la página de productos.
// Para ello, vamos a crear un nuevo archivo llamado ProductPage.jsx en la carpeta src/Pages.
// En este archivo, vamos a importar el componente GeneralProducts y pasarlo como prop a la página de productos.
// También vamos a crear un archivo ProductPage.css para darle estilo a la página de productos.

import { useProductManager } from '../../Hooks/Products/useProductManager';
import ProductsOnOffer from '../../Components/ProductCard/ProductsOnOffer';
import './ProductSection.css';

const ProductsSection = () => {
  const { getOffers } = useProductManager();

  // Obtener las ofertas
  const ofertas = getOffers();

  // Validar si hay productos en oferta
  if (!ofertas || ofertas.length === 0) {
    return <p>No hay productos en oferta en este momento.</p>;
  }

  return (
    <div className="product-offer-section">
      <ProductsOnOffer products={ofertas} />
    </div>
  );
};

export default ProductsSection;

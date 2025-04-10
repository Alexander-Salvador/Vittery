import ProductsOnOffer from '../../Components/ProductCard/ProductsOnOffer';
import CategoryProducts from '../../Components/ProductCard/CategoryProducts';
import { useCategory } from '../../Hooks/Products/useCategory';
import { useOffers } from '../../Hooks/Products/useOffers';
import './ProductSection.css';

const ProductSection = () => {
  const categories = useCategory();
  const offers = useOffers();

  return (
    <div className="products-container-offers">
      <section>
        <h2>Ofertas</h2>
        <div className="product-grid">
          {offers.map((product) => (
            <ProductsOnOffer key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2>Categorías</h2>
        <div className="product-grid">
          {categories.map((product) => (
            <CategoryProducts key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;

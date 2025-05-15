import useProductManager from './useProductManager';

const useProductOffer = (quantity = 3) => {
  const { products, error, loading } = useProductManager();

  if (loading) return { offers: [], loading: true, error: null };
  if (error) return { offers: [], loading: false, error };

  const offers = products
    .filter((product) => {
      return (
        product.isOffer &&
        typeof product.originalPrice === 'number' &&
        typeof product.price === 'number' &&
        product.originalPrice > product.price
      );
    })
    .map((product) => {
      const discountPercent = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      );
      return {
        ...product,
        discountPercent, // añadimos el campo directamente
      };
    })
    .filter((product) => product.discountPercent > 13)
    .slice(0, quantity);

  return { offers, loading: false, error: null };
};

export default useProductOffer;

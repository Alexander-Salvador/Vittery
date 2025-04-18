import useProductManager from './useProductManager';
// This custom hook retrieves a list of products that are currently on offer.

const useProductOffer = (quantity = 3) => {
  const { products, error, loading } = useProductManager();

  if (loading) return { offers: [], loading: true, error: null };
  if (error) return { offers: [], loading: false, error };

  const offers = products
    .filter((product) => product.isOffer && product.discountPercent > 13)
    .slice(0, quantity);
  return { offers, loading: false, error: null };
};

export default useProductOffer;

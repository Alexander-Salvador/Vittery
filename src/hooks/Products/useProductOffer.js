import useProductManager from './useProductManager';
// This custom hook retrieves a list of products that are currently on offer.

const useProductOffer = () => {
  const { products, error, loading } = useProductManager();
  
  if (loading) return { offers: [], loading: true, error: null };
  if (error) return { offers: [], loading: false, error };
  
  const offers = products.filter((product) => product.isOffer);
  return { offers, loading: false, error: null };
};

export default useProductOffer;

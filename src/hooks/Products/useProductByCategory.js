import useProductManager from './useProductManager';

const useProductByCategory = (category) => {
  const { products, error, loading } = useProductManager();
  
  if (loading) return { products: [], loading: true, error: null };
  if (error) return { products: [], loading: false, error };
  if (!category) return { products: [], loading: false, error: 'Category is required' };
  
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  
  return { 
    products: filteredProducts,
    loading: false,
    error: filteredProducts.length === 0 ? 'No products found in this category' : null
  };
};

export default useProductByCategory;
import products from '../Data/products.json';

export const getProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

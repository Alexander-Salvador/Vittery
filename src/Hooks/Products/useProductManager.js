import { useState, useEffect } from 'react';
import productsData from '../../data/products.json';

export const useProductManager = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Cargando productos:', productsData);
      setProducts(productsData);
    };
    fetchData();
  }, []);

  const getOffers = () => {
    const offers = products.filter((p) => p.isOffer);
    console.log('Ofertas encontradas:', offers);
    return offers;
  };
  const getByCategory = (category) =>
    products.filter((p) => p.category === category && !p.isOffer);
  const getById = (id) => products.find((p) => p.id === id);

  return { getOffers, getByCategory, getById };
};

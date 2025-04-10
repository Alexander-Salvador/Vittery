import { useState, useEffect } from 'react';

const useOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) => p.isOffer);
        setOffers(filtered);
      });
  }, []);
  return offers;
};

import './CategoryProducts.css';

const CategoryProducts = () => {
  const Categories = [
    {
      name: 'Ropa',
      image: './images/products/ropa-hombre.jpeg',
    },
    {
      name: 'Supermercado',
      image: './images/products/ropa-hombre.jpeg',
    },
    {
      name: 'Tecnología',
      image: './images/products/ropa-hombre.jpeg',
    },
    {
      name: 'Celulares',
      image: './images/products/ropa-hombre.jpeg',
    },
    {
      name: 'Hogar',
      image: './images/products/ropa-hombre.jpeg',
    },
  ];
  return (
    <div className="category__container">
      <h2 className="category__container-title">Categorías</h2>
      <div className="category__grid">
        {Categories.map((category, index) => (
          <div className="category__card" key={index}>
            <img
              className="category__card-img"
              src={category.image}
              alt={category.name}
            />
            <h3 className="category__card-title">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

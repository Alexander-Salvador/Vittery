import './CategoryProducts.css';

const CategoryProducts = () => {
  const Categories = [
    {
      name: 'Ropa',
      image: './images/products/Categories/categories-clothes.jpg',
    },
    {
      name: 'Supermercado',
      image: './images/products/Categories/categories-supermarket.jpg',
    },
    {
      name: 'Tecnología',
      image: './images/products/Categories/categories-technology.jpg',
    },
    {
      name: 'Salud & Bienestar',
      image: './images/products/Categories/categories-health.jpg',
    },
    {
      name: 'Hogar & Decoración',
      image: './images/products/Categories/categories-home.jpg',
    },
    {
      name: 'Fitness',
      image: './images/products/Categories/categories-fitness.jpg',
    },
  ];
  return (
    <div className="category__container">
      <h2 className="category__container-title">
        Explora las nuevas categorías
      </h2>
      <div className="category__grid">
        {Categories.map((category, index) => (
          <div className="category__card" key={index}>
            <img
              className="category__card-img"
              src={category.image}
              alt={category.name}
            />
            <div className="category__card-overlay"></div>
            <h3 className="category__card-title">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

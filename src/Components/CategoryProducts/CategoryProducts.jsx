import { FaArrowRight } from 'react-icons/fa6';
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
      <div className="category__container-titles">
        <div className="category__left">
          <h2 className="category-title">Categorías</h2>
          <p className="category-description">
            Explora una amplia variedad de categorías para encontrar lo que
            necesitas.
          </p>
        </div>
        <div className="category__right">
          <p className="category__right-text">Explora todas las categorías</p>
          <FaArrowRight />
        </div>
      </div>
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

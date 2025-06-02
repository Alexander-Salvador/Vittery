import './CategoryNavMenu.css';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    title: 'Ropa',
    desc: 'Casual, Verano, Invierno...',
    image: './images/Categories/categories-clothes.jpg',
    path: 'ropa',
  },
  {
    title: 'Supermercado',
    desc: 'Cereales, Embolsados, Carnes...',
    image: './images/Categories/categories-supermarket.jpg',
    path: 'supermercado',
  },
  {
    title: 'Tecnología',
    desc: 'Tecnología, Innovación, Gadgets...',
    image: './images/Categories/categories-technology.jpg',
    path: 'tecnología',
  },
  {
    title: 'Salud & Bienestar',
    desc: 'Bioma, Suplementos, Vitaminas...',
    image: './images/Categories/categories-health.jpg',
    path: 'salud-y-bienestar',
  },
  {
    title: 'Hogar & Decoración',
    desc: 'Stands, Decoración, Muebles...',
    image: './images/Categories/categories-home.jpg',
    path: 'hogar-y-decoración',
  },
  {
    title: 'Fitness & Deportes',
    desc: 'Barras, Suplementos, Ligas...',
    image: './images/Categories/categories-fitness.jpg',
    path: 'fitness',
  },
];

const CategoryNavMenu = ({ onCategoryClick }) => {
  return (
    <div className="category__container">
      {categories.map((category, index) => (
        <NavLink
          to={`/categoria/${category.path}`}
          key={index}
          className="category__card"
          onClick={onCategoryClick}>
          <img
            src={category.image}
            alt={category.title}
            className="category__image"
            onError={(e) => (e.target.src = '/placeholder.jpg')}
          />
          <div className="category__content">
            <h3 className="category__title">{category.title}</h3>
            <p className="category__desc">{category.desc}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryNavMenu;

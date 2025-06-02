import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './CategoryProducts.css';

const categories = [
  {
    name: 'Supermercado',
    subtitle: 'Fresh produce, pantry essentials, ...',
    image: './images/Categories/categories-supermarket.jpg',
    path: 'supermercado',
  },
  {
    name: 'Tecnología',
    subtitle: 'Latest gadgets, smart home...',
    image: './images/Categories/categories-technology.jpg',
    path: 'tecnologia',
  },
  {
    name: 'Ropa',
    subtitle: 'Stylish apparel for all ages...',
    image: './images/Categories/categories-clothes.jpg',
    path: 'ropa',
  },
  {
    name: 'Hogar & Decoración',
    subtitle: 'Furniture, decor, and essentials...',
    image: './images/Categories/categories-home.jpg',
    path: 'hogar-decoracion',
  },
  {
    name: 'Salud & Bienestar',
    subtitle: 'Personal care, cosmetics, and...',
    image: './images/Categories/categories-health.jpg',
    path: 'salud-bienestar',
  },
  {
    name: 'Fitness',
    subtitle: 'Gear for sports, fitness, and outdoor...',
    image: './images/Categories/categories-fitness.jpg',
    path: 'fitness',
  },
];

const CategoryProducts = () => {
  return (
    <section className="category__section">
      <div className="category__category-container">
        <div className="category__container-titles">
          <div>
            <h2 className="category-title">Explora las nuevas categorías</h2>
            <p className="category-description">
              Tenemos una amplia selección de productos
            </p>
          </div>
          <div className="category__right">
            <p className="category__right-text">Ver todas las categorías</p>
            <FaArrowRight className="category__right-icon" />
          </div>
        </div>

        <div className="category__grid">
          {categories.map(({ name, subtitle, image, path }, index) => (
            <Link
              to={`/categoria/${path}`}
              className="category__card"
              key={index}>
              <div className="category__card-image-container">
                <img
                  src={image}
                  alt={name}
                  className="category__card-img"
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />
                <div className="category__card-overlay" />
                <div className="category__card-title-group">
                  <h3 className="category__card-title">{name}</h3>
                  <p className="category__card-subtitle">{subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;

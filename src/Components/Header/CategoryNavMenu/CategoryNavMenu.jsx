import './CategoryNavMenu.css';

const categories = [
  {
    title: 'Ropa',
    desc: 'Casual, Verano, Inv..',
    image: './images/Categories/categories-clothes.jpg',
  },
  {
    title: 'Supermercado',
    desc: 'Cereales, Embolsados, Carn...',
    image: './images/Categories/categories-supermarket.jpg',
  },

  {
    title: 'Tecnología',
    desc: 'Tecnología, Innovación, Gadg...   ',
    image: './images/Categories/categories-technology.jpg',
  },
  {
    title: 'Salud & Bienestar',
    desc: 'Bioma, Suplementos, Vitami...',
    image: './images/Categories/categories-health.jpg',
  },
  {
    title: 'Hogar & Decoración',
    desc: 'Stands, Decoración, Muebl...',
    image: './images/Categories/categories-home.jpg',
  },
  {
    title: 'Fitness & Deportes',
    desc: 'Barras, Suplementos, Lig...',
    image: './images/Categories/categories-fitness.jpg',
  },
];

const CategoryNavMenu = () => {
  return (
    <div className="category__container">
      {categories.map((category, index) => {
        <div className="category__card" key={index}>
          <img src={category.image} alt={category.title} />
          <p> {category.desc} </p>
          <h3>{category.title}</h3>
        </div>;
      })}
    </div>
  );
};

export default CategoryNavMenu;

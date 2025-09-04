import { useState, useRef } from 'react';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import CategoryNavMenu from '../CategoryNavMenu/CategoryNavMenu';
import './NavMenu.css';

const NavMenu = () => {
  const [showCategories, setShowCategories] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCategories(false);
    }, 200); // <-- delay en milisegundos (200ms recomendado)
  };

  return (
    <ul className="nav__menu-list">
      <li
        className="nav__menu-elements nav__menu-categorias"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <span className={`nav__menu-item ${showCategories ? 'active' : ''}`}>
          <IoIosMenu className="nav__menu-item-drowmenu" />
          <h2 className="nav__menu-item-text">Categorias</h2>
          <IoIosArrowDown
            className={`nav__menu-item-arrow-icon ${
              showCategories ? 'rotated' : ''
            }`}
          />
        </span>

        {showCategories && (
          <div className="nav__menu-category-dropdown">
            <CategoryNavMenu onCategoryClick={() => setShowCategories(false)} />
          </div>
        )}
      </li>
    </ul>
  );
};

export default NavMenu;

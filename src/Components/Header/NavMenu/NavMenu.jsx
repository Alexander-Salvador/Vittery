import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CategoryNavMenu from '../CategoryNavMenu/CategoryNavMenu';
import './NavMenu.css';

const NavMenu = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <ul className="nav__menu-list">
      <li className="nav__menu-elements">
        <NavLink className="nav__menu-item" to="/">
          Home
        </NavLink>
      </li>

      <li className="nav__menu-elements">
        <NavLink className="nav__menu-item" to="/hogar">
          Ofertas
        </NavLink>
      </li>
      <li
        className="nav__menu-elements"
        onMouseEnter={() => setShowCategories(true)}
        onMouseLeave={() => setShowCategories(false)}>
        <span className="nav__menu-item">
          Categorías <span>▾</span>
          {showCategories && (
            <div className="nav__menu-category">
              <CategoryNavMenu />
            </div>
          )}
        </span>
      </li>
      <li className="nav__menu-elements">
        <NavLink className="nav__menu-item" to="/ropa">
          Beneficios
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;

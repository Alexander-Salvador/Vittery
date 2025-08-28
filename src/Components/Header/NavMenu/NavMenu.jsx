import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosMenu } from 'react-icons/io';

import CategoryNavMenu from '../CategoryNavMenu/CategoryNavMenu';
import './NavMenu.css';

const NavMenu = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <ul className="nav__menu-list">
      <li
        className="nav__menu-elements nav__menu-categorias"
        onMouseEnter={() => setShowCategories(true)}
        onMouseLeave={() => setShowCategories(false)}>
        <span className="nav__menu-item">
          <IoIosMenu className="nav__menu-item-drowmenu" />
          <h2 className="nav__menu-item-text">Categorias</h2>
          <IoIosArrowDown className="nav__menu-item-arrow-icon" />
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

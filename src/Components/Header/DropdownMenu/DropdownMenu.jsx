import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button">
        <span className="dropdown-menu__icon">☰</span>
        <span className="dropdown-menu__text">Menu</span>
      </button>
    </div>
  );
};

export default DropdownMenu;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';
import { FaChevronDown } from 'react-icons/fa';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleMenu} className="dropdown-menu__button">
        CATEGORIAS <FaChevronDown className="dropdown-menu__icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/hogar">Hogar</Link>
          </li>
          <li>
            <Link to="/ropa">Ropa</Link>
          </li>
          <li>
            <Link to="/tecnologia">Tecnología</Link>
          </li>
          <li>
            <Link to="/frutas">Frutas</Link>
          </li>
          <li>
            <Link to="/bebidas">Bebidas</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;

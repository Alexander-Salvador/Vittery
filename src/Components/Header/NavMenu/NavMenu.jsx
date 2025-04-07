import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <ul className="nav-menu-list">
      <li className="nav-menu-elements">
        <Link to="/">Promociones</Link>
      </li>
      <li className="nav-menu-elements">
        <Link to="/hogar">Ofertas</Link>
      </li>
      <li className="nav-menu-elements">
        <Link to="/ropa">Beneficios</Link>
      </li>
    </ul>
  );
};

export default NavMenu;

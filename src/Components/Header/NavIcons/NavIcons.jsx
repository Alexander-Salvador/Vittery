import './NavIcons.css';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBolt, FaClock, FaStar } from 'react-icons/fa';

const items = [
  {
    key: 'tendencias',
    icon: <FaChartLine />,
    label: 'Tendencias',
    to: '/tendencias',
  },
  { key: 'nuevos', icon: <FaBolt />, label: 'Nuevos', to: '/nuevos' },
  { key: 'ofertas', icon: <FaClock />, label: 'Ofertas', to: '/ofertas' },
  {
    key: 'destacados',
    icon: <FaStar />,
    label: 'Destacados',
    to: '/destacados',
  },
];

const NavIcons = () => {
  return (
    <div className="navicons__container-wrapper">
      <nav className="nav__icons-mid" aria-label="Navegación principal">
        <ul className="nav__icons-items">
          {items.map((it) => (
            <li key={it.key} className="nav__icon-li">
              <Link
                to={it.to}
                className="nav__icons-button"
                aria-label={it.label}
                title={it.label}>
                <span className="nav__icon-span" aria-hidden="true">
                  {it.icon}
                </span>
                <span className="navicon__text">{it.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavIcons;

import './NavIcons.css';
import {
  FaChartLine,
  FaBolt,
  FaClock,
  FaStar,
} from 'react-icons/fa';

const items = [
  { key: 'trending', icon: <FaChartLine />, label: 'Trending' },
  { key: 'new', icon: <FaBolt />, label: 'New Arrivals' },
  { key: 'deals', icon: <FaClock />, label: 'Daily Deals' },
  { key: 'featured', icon: <FaStar />, label: 'Featured' },
];

const NavIcons = () => {
  return (
    <div className="navicons__container-wrapper">
      <nav className="navicons-center" aria-label="Main navigation">
        <ul className="nav-items">
          {items.map((it) => (
            <li key={it.key} className="nav-item">
              <button
                className="nav-button"
                aria-label={it.label}
                title={it.label}
                type="button">
                <span className="nav-icon" aria-hidden="true">
                  {it.icon}
                </span>
                <span className="nav-text">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* <div className="nav-right">
        <div
          className="delivery"
          role="status"
          aria-label="Delivery within 24 hours">
          <span className="delivery-icon" aria-hidden="true">
            <FaShippingFast />
          </span>
          <span className="delivery-text">Delivery within 24 hours</span>
        </div>
      </div> */}
    </div>
  );
};

export default NavIcons;

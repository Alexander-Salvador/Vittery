import { Link } from 'react-router-dom';
import { SiCoinmarketcap } from 'react-icons/si';

import './Logo.css';

const Logo = () => {
  return (
    <div className="nav__logo-container">
      <Link to="/" className="link-no-style">
        <div className="nav__logo-grid">
          <div className="nav__logo-container-icon">
            <SiCoinmarketcap className="nav__logo-icon" />
          </div>
          <div className="nav__logo-container-titles">
            <h1 className="nav__logo-title">Vitterys</h1>
            <h3 className="nav__logo-subtitle">Tu supermercado de confianza</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

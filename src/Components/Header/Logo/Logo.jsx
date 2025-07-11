import { Link } from 'react-router-dom';
import { SiCoinmarketcap } from 'react-icons/si';

import './Logo.css';

const Logo = () => {
  return (
    <div className="nav-logo-container">
      <Link to="/" className="link-no-style">
        <h1 className="nav-logo-title">
          <SiCoinmarketcap className="nav-logo-icon" />
          Vitterys
        </h1>
      </Link>
    </div>
  );
};

export default Logo;

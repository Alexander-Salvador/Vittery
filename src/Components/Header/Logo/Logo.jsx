import { Link } from 'react-router-dom';
import { SiCoinmarketcap } from 'react-icons/si';

import './Logo.css';

const Logo = () => {
  return (
    <div className="nav-logo-container">
      <h1 className="nav-logo-title">
        <SiCoinmarketcap className="nav-logo-icon" />
        Vitterys
      </h1>
    </div>
  );
};

export default Logo;

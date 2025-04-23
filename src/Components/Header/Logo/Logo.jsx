import { Link } from 'react-router-dom';
import { SiCoinmarketcap } from 'react-icons/si';

import './Logo.css';

const Logo = () => {
  return (
    <div className="nav-logo">
      <Link to="/">
        <h1>
          <SiCoinmarketcap className="nav-icon" />
          Vitterys
        </h1>
      </Link>
    </div>
  );
};

export default Logo;

import { Link } from 'react-router-dom';
import logo from '../../../assets/logovitterys.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo Vittery" className="logo__image" />
      </Link>
    </div>
  );
};

export default Logo;

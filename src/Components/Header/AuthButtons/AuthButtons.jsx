import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <div className="header__auth-buttons">
      <Link to="/login" className="header__auth-buttons__link">
        <FiUser className="header__auth-buttons__icon" />
        <span className="header__auth-buttons__text">Account</span>
      </Link>
    </div>
  );
};

export default AuthButtons;

import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Link to="/login" className="auth-buttons__link">
        <FiUser className="auth-buttons__icon" />
        <span className="auth-buttons__text"></span>
      </Link>
    </div>
  );
};

export default AuthButtons;

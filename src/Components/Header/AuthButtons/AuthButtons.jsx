import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Link to="/login" className="auth-buttons__link">
        <FaUser className="auth-buttons__icon" />
        <span className="auth-buttons__text">Iniciar sesión</span>
      </Link>
    </div>
  );
};

export default AuthButtons;

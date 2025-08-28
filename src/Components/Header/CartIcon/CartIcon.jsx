import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <div className="header__cartIcon-container">
      <Link to="/cart">
        <IoCartOutline className="header__cartIcon-icon" />
      </Link>
    </div>
  );
};

export default CartIcon;

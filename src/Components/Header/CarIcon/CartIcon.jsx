import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart className="cart-icon__icon" />
      <span className="cart-icon__text"></span>
    </Link>
  );
};

export default CartIcon;

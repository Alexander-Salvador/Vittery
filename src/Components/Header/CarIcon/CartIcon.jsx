import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
      <CiShoppingCart className="cart-icon__icon" />
      <span className="cart-icon__text"></span>
    </Link>
  );
};

export default CartIcon;

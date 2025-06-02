import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <div className="cart__icon">
      <Link to="/cart" className="cart-icon">
        <CiShoppingCart className="cart-icon__icon" />
        <span className="cart-icon__text"></span>
      </Link>
    </div>
  );
};

export default CartIcon;

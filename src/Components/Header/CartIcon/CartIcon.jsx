import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <div className="cartIcon-container">
      <Link to="/cart">
        <CiShoppingCart className="cartIcon-icon" />
        <span className="cartIcon-text"></span>
      </Link>
    </div>
  );
};

export default CartIcon;

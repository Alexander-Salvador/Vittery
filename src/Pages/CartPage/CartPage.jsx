import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  // Por ahora, mostramos la página de carrito vacío
  // hasta que implementemos la lógica del carrito
  return (
    <div className="cart-page cart-page--empty">
      <h1>Carrito de Compras</h1>
      <p>No hay productos en el carrito</p>
      <Link to="/products" className="cart-page__continue-shopping">
        Continuar comprando
      </Link>
    </div>
  );
};

export default CartPage;

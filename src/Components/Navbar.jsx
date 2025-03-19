import './Navbar.css';
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-logo">
          <img className="header-logo-img" src={logo} alt="logo" />
        </div>

        <div className="header-title">
          <nav className="header-nav">CATEGORIAS</nav>
        </div>

        <div className="header-search">
          <input
            className="header-search-input"
            id="input-color"
            type="text"
            placeholder="Buscar Productos..."
          />
        </div>

        <div className="header-cart-container">
          <h3 className="header-cart-text">Carrito 🛒</h3>
        </div>

        <div className="header-user-container">
          <h3 className="header-login-text">Login 👤</h3>
        </div>
      </header>
    </>
  );
};

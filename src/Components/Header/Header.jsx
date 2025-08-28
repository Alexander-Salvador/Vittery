import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo';
import CartIcon from './CartIcon/CartIcon';
import AuthButtons from './AuthButtons/AuthButtons';
import NotificationIcon from './Notifications/NotificationIcon';
// import ThemeToggle from './ThemeMode/ThemeToggle';
import './Header.css';
import NavMenu from './NavMenu/NavMenu';
import NavIcons from './NavIcons/NavIcons';
import { FaShippingFast } from 'react-icons/fa';

const Header = () => {
  const wrapperRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const { top } = wrapperRef.current.getBoundingClientRect();
      setIsSticky(top <= 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="header_container">
      <div className="header-calltoaction">
        <div className="header-delivery-title">
          <h3>🚚 Envío gratis en compras mayores a S/99.90</h3>
        </div>
        {/* <div className="header-delivery-title">
          <h3>🔒 Compra 100% segura</h3>
        </div> */}
        <div className="header-delivery-title">
          <h3>📦 Supermercado de confianza www.Vitterys.com</h3>
        </div>
      </div>

      <div
        ref={wrapperRef}
        className={`header__main-container ${isSticky ? 'stuck' : ''}`}>
        <div className={`header__container-logo ${isSticky ? 'sticky' : ''}`}>
          <Logo />
        </div>

        <div className="header__container-searchbar">
          <SearchBar />
        </div>

        <div className="header__container-icons">
          <div className="header__account-titles">
            {/* <h3 className="header__container-icons__title"> */}
            <AuthButtons />
            {/* </h3> */}
          </div>
          <div className="header__notificationIcon">
            <NotificationIcon />
          </div>
          <div className="header__cartIcon">
            <CartIcon />
          </div>
          {/* <ThemeToggle /> */}
        </div>
      </div>

      <div className="header__container-navMenu">
        <div className="header-delivery-title">
          <NavMenu />
        </div>

        <div className="header-delivery-title">
          <NavIcons />
        </div>

        <div className="header-container-delivery">
          <div className="header-delivery-icon">
            <FaShippingFast className="header-delivery-icono" />
            <span className="header-delivery-text">Entrega Rapida</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

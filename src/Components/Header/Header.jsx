import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo';
import CartIcon from './CartIcon/CartIcon';
import AuthButtons from './AuthButtons/AuthButtons';
import './Header.css';
import ThemeToggle from './ThemeMode/ThemeToggle';

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
        🚚 Envío gratis en compras mayores a S/99.90 • Rápido & Seguro.
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
          <h3 className="header__container-icons__title">
            <AuthButtons />
            Account
          </h3>
          <CartIcon />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;

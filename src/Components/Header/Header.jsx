import { useEffect, useRef, useState } from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo';
import CartIcon from './CartIcon/CartIcon';
import AuthButtons from './AuthButtons/AuthButtons';
import NavMenu from './NavMenu/NavMenu';
import './Header.css';

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
      {/* 1) Call to Action: estático */}
      <div className="header-calltoaction">
        🚚 Envío gratis en compras mayores a S/99.90
      </div>

      {/* 2) Wrapper con ref para medir */}
      <div
        ref={wrapperRef}
        className={`header-main-wrapper ${isSticky ? 'stuck' : ''}`}>
        {/* 3) Header-main: cambia de estado con la clase */}
        <div className={`header-main ${isSticky ? 'sticky' : ''}`}>
          <div className="header__mid-separator">
            <Logo />
          </div>
          <div className="header-left-items">
            <nav className="header__dropdown-menu">
              <DropdownMenu />
            </nav>
            <nav className="header-nav-menu">
              <NavMenu />
            </nav>
          </div>
          <div className="header-right-items">
            <SearchBar />
            <AuthButtons />
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

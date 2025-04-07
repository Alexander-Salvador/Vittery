import DropdownMenu from './DropdownMenu/DropdownMenu';
import SearchBar from './SeachBar/SearchBar';
import Logo from './Logo/Logo';
import CartIcon from './CarIcon/CartIcon';
import AuthButtons from './AuthButtons/AuthButtons';
import NavMenu from './NavMenu/NavMenu';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__dropdown-menu">
          <DropdownMenu />
        </nav>
        <nav className="header-nav-menu">
          <NavMenu />
        </nav>

        <Logo />
        <div className="header__search-bar">
          <SearchBar />
        </div>
        <div className="header__auth-buttons">
          <AuthButtons />
        </div>
        <div className="header__cart-icon">
          <CartIcon />
        </div>
      </header>
    </>
  );
};

export default Header;

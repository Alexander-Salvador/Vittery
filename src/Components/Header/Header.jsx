import DropdownMenu from './DropdownMenu/DropdownMenu';
import SearchBar from './SeachBar/SearchBar';
import Logo from './Logo/Logo';
import CartIcon from './CarIcon/CartIcon';
import AuthButtons from './AuthButtons/AuthButtons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <DropdownMenu />
      </nav>
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
  );
};

export default Header;

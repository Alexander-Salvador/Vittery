import DropdownMenu from './DropdownMenu/DropdownMenu';
import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo';
import CartIcon from './CartIcon/CartIcon';
import AuthButtons from './AuthButtons/AuthButtons';
import NavMenu from './NavMenu/NavMenu';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header-left-items">
          <nav className="header__dropdown-menu">
            <DropdownMenu />
          </nav>
          <nav className="header-nav-menu">
            <NavMenu />
          </nav>
        </div>

        <div className="header__mid-separator">
          <Logo />
        </div>

        <div className="header-right-items">
          <SearchBar />
          <AuthButtons />
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Header;

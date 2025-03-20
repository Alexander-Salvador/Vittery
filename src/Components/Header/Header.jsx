import DropdownMenu from './DropdownMenu/DropdownMenu';
import SearchBar from './SeachBar/SearchBar';
import Logo from './Logo/Logo';
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
    </header>
  );
};

export default Header;

import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="header__container-search">
      <input
        type="text"
        placeholder="Buscar productos: carnes, embutidos..."
        className="header__search-bar__input"
      />
      <CiSearch className="headwer__search-bar__icon" />
    </div>
  );
};

export default SearchBar;

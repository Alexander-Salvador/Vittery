import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search-bar__container">
      <CiSearch className="search-bar__icon" />
      <input
        className="search-bar__input"
        placeholder="Buscar productos..."
        type="text"
      />
    </form>
  );
};

export default SearchBar;

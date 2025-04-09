import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search-bar__container">
      <FaSearch className="search-bar__icon" />
      <input
        className="search-bar__input"
        placeholder="Buscar productos..."
        type="text"
      />
    </form>
  );
};

export default SearchBar;

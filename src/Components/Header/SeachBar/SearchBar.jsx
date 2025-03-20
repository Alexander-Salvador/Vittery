import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search-bar">
      <FaSearch className="search-bar__icon" />
      <input
        className="search-bar__input"
        type="text"
        placeholder="Buscar productos, marcas y más..."
      />
    </form>
  );
};

export default SearchBar;

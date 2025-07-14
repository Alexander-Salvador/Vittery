import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar__container">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="search-bar__input"
      />
      <CiSearch className="search-bar__icon" />
    </div>
  );
};

export default SearchBar;

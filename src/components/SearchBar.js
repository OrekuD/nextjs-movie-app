import { useState } from "react";
import { Search } from "../svg/Svg";

const SearchBar = ({ searchTerm, setSearch, searchForMovies }) => {
  return (
    <div className="searchbar">
      <input
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchForMovies();
          }
        }}
      />
      <span onClick={searchForMovies}>
        <Search color="#ffffff" size="24px" />
      </span>
    </div>
  );
};

export default SearchBar;

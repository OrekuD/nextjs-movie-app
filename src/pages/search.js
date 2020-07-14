import { Layout, SearchBar, CategoryCard, Spinner } from "../components";
import { useState } from "react";
import { dummy } from "../dummy-data";
import { MOVIE_DB_API_KEY } from "../constants";

const Search = () => {
  const [searchTerm, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchForMovies = async () => {
    if (searchTerm.trim().length === 0) {
      console.log("dfgh");
      return;
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
    const data = await response.json();
    setSearchResults(data.results);
    // setIsLoaded(true);
    console.log(data.results[0]);
  };

  return (
    <Layout>
      <SearchBar
        searchForMovies={searchForMovies}
        searchTerm={searchTerm}
        setSearch={setSearch}
      />
      {searchResults.length === 0 ? (
        <div className="loader">
          <Spinner />
        </div>
      ) : (
        <div className="search">
          <p>
            Search results for <span> {searchTerm} </span>
          </p>
          <div className="category">
            {searchResults.map((item, index) => (
              <CategoryCard data={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Search;

import { Layout, SearchBar, Card } from "../components";
import { useState } from "react";
import { dummy } from "../dummy-data";

const Search = () => {
  const [searchTerm, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchForMovies = () => {
    if (searchTerm.trim().length === 0) {
      console.log("dfgh");
      return;
    }
    console.log(searchTerm);
  };
  return (
    <Layout>
      <SearchBar
        searchForMovies={searchForMovies}
        searchTerm={searchTerm}
        setSearch={setSearch}
      />
      {dummy.length === 0 ? (
        <div>
          <p> loading... </p>
        </div>
      ) : (
        <div>
          <p> Search results </p>
          <div>
            {dummy.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Search;

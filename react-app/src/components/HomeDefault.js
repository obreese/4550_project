import { useState } from "react";

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const search = () => {
    setSearchResults([searchResults] + [searchResults.length]);
    console.log("I did a search thing");
    console.log(searchResults);
  };

  return (
    <div>
      <input type="search"></input>
      <button onClick={search}>Search</button>
      <div>{searchResults}</div>
    </div>
  );
}

export default Home;

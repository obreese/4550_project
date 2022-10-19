import { useState } from "react";
import HomeBar from "./HomeBar";

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
        <br/>
        <HomeBar/>

    </div>
  );
}

export default Home;

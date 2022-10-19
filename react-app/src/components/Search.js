import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("q")
  return <div>
    <h1>Below is your search. You're Welcome!</h1>
    <p>{searchParams.get("q")}</p>
  </div>;
}

export default Search;

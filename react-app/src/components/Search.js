import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { CLIENT_ID, CLIENT_SECRET } from "../constants";
import { Buffer } from "buffer";
import { URLS } from "../constants";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const response = fetch(URLS.GET_ACCESS_TOKEN, {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
  });
  console.log(response.json());

  return (
    <div>
      <h1>Below is your search. You're Welcome!</h1>
    </div>
  );
}

export default Search;

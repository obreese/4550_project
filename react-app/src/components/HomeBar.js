//This Code is directly copied and should not be used as it. Inspiration only!


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function HomeBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [input, setInput] = useState("hi");

    const search = (e) => {
        e.preventDefault();

        const path = location.pathname;

        if (path === "/search") {
            navigate("?q=" + input);
        } else {
            navigate("search?q=" + input);
        }
    };

    useEffect(() => {
        const param = new URL(window.location.href).searchParams.get("q");
        if (param) console.log(param);
    }, [params]);

    return (
        <form className="form-inline" onSubmit={search}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>
        </form>
    );
}

export default HomeBar;




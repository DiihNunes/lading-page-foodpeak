import React from "react";

import "./app.css"

import Nav from "./components/nav";
import Main from "./components/main";

export default (props) => {
    return(
        <div>
            <Nav />
            <Main />
        </div>
    )
}
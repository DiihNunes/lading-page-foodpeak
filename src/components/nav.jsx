import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";

import "./nav.css"

export default (props) => {
    return (
        <header>
            <nav className="navigation">
                <a href="" className="logo">F<span>oo</span>D P<span>ee</span>K</a>
                <ul className="nav-menu">
                    <li><a href="#">home</a></li>
                    <li><a href="#">sobre</a></li>
                    <li><a href="#">menu</a></li>
                    <li><a href="#">contato</a></li>
                    <i><BiSearch /></i>
                </ul>
            </nav>

        </header>
    )
}
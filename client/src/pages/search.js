import React, { Component, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";

import Navbar from "../components/Navbar"
import Row from "../components/Row"
import Jumbotron from "../components/Jumbotron"

// import API from "../../utils/api";

export default function Search() {

    return (
        <div className="App">
            <Navbar />
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to your Google Books Search Page</h2>
            </div>
            <p className="App-intro">
                To get started, edit add more Search code.
            </p>
        </div>


    );
}



// Testing-----------------------------------------------------
// <div className="App">
//             <div className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <h2>Welcome to the Search Page</h2>
//             </div>
//             <p className="App-intro">
//                 To get started, edit add more Search code.
//             </p>
//         </div>
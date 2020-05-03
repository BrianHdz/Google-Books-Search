import React, { Component, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";
// import API from "../../utils/api";

import Navbar from "../components/Navbar"


export default function Search() {

    return (
        <div className="App">
            <Navbar />
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>View Your Saved Books</h2>
            </div>
            <p className="App-intro">
            You found the secret message! Nothing gets by you.
            </p>
        </div>
    );
}
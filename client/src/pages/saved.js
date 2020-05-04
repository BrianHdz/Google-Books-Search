import React, { Component, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";

import Navbar from "../components/Navbar";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/SearchBar";
import BoxResults from '../components/BoxResults';
import Jumbotron from '../components/Jumbotron';

// import API from "../../utils/api";

export default function Saved() {

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

            <Row><Col size="md-12 sm-12">
                <div className="justify-content-center">
                    <h3>Saved</h3></div></Col>
            </Row>




        </div>
    );
}
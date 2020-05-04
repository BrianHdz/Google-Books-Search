import React, { Component, useEffect, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";

import Navbar from "../components/Navbar";
import { Col, Row, Container } from "../components/Grid";
import { TextArea, FormBtn } from "../components/SearchBar";
import BoxResults from '../components/BoxResults';
import Jumbotron from '../components/Jumbotron';

import API from "../utils/searchApi";
import savedAPI from "../utils/savedApi";

export default function Search() {
    //Set the component's initial states
    const [formObject, setFormObject] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();

        var userData = { search: formObject }
        console.log(userData)


        // Run call to API for book info.
        API.searchBooks(userData.search)
            .then(function (res) {
                console.log(res.data.items)
                // Error handling
                if (res.data.items.length === 0) {
                    
                    console.log("We didn't find anything.");
                }
                // Successful results. Show 10 books.
                console.log(res.data.items[0].volumeInfo)
                // This is the Title of the first Book in the search.
                console.log(res.data.items[0].volumeInfo.title)
            })
            .catch((err) => console.log(err));
    }


    return (
        <div className="App">
            <Navbar />
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to your Google Books Search Page</h2>
            </div>
            <p className="App-intro">
                You found the secret message! Nothing gets by you.
            </p>
            <Container fluid>
                <Row>
                    <Col size="md-3 sm-12"></Col>
                    <Col size="md-6 sm-12" className="justify-content-center">

                        <form
                            className="formStyling"
                            noValidate
                        onSubmit={handleSearch}
                        >
                            <TextArea
                                name="title"
                                placeholder="Title (required)"
                                onChange={(e) => setFormObject(e.target.value)}
                                // handleInputChange={handleInputChange}
                                // handleClick={handleClick}

                            />
                            <FormBtn >
                            </FormBtn>
                        </form>

                    </Col>
                    <Col size="md-3 sm-12"></Col>
                </Row>


                <Row><Col size="md-12 sm-12">
                    <div className="justify-content-center">
                        <h3>Results</h3></div></Col>
                </Row>

                <Row>
                    <Col size="md-2 sm-12"></Col>

                    <Col size="md-8 sm-12">

                        {/* {this.state.friends.map(friend => ( */}
                        <BoxResults
                            title={results.title}
                            authors={results.authors}
                            description={results.description}
                            link={results.link}
                            coverArt={results.image}
                        />
                        {/* ))} */}

                        {/* {this.state.result.map(friend => (
                            <Jumbotron sectionTitle="Result"
                            key={result.id}
                            title={result.volumeInfo.title}
                            authors={result.volumeInfo.authors}
                            description={result.volumeInfo.description}
                            link={result.volumeInfo.infoLink}
                            image={
                                result.volumeInfo.imageLinks === undefined
                                    ? "https://via.placeholder.com/64x64.png?text=No+Image+Found"
                                    : result.volumeInfo.imageLinks.thumbnail
                            }
                            handleSave={handleSave}
                            />
                        ))} */}
                    </Col>

                    <Col size="md-2 sm-12"></Col>
                </Row>



            </Container>
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
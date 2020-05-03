import React, { Component, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";

import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
//import Row from "../components/Row"
//import Col from "../components/Col"
//import { Col } from 'react-bootstrap';
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/SearchBar";
import { BoxResults } from "../components/BoxResults";

// import API from "../../utils/api";

export default function Search() {
    //Set the component's initial states
    const [formObject, setFormObject] = useState({})

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

                        <form className="formStyling">
                            <Input
                                onChange={() => { }}
                                name="title"
                                placeholder="Title (required)" />
                            <FormBtn
                                disabled={!(formObject.author && formObject.title)}
                                onClick={() => { }}>
                                Find Book
                    </FormBtn>
                        </form>

                    </Col>
                    <Col size="md-3 sm-12"></Col>
                </Row>



                <Row>
                    <Col size="md-8 sm-12">
                        {/* {books.length ? (
                            <List>
                                {books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                                    </ListItem>
                                ))}
                            </List> */}
                            <BoxResults />
                            //   If there are no results to display show this message below on screen
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
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
import React, { Component, useEffect, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";

import { Col, Row, Container } from "../components/Grid";
import BoxResults from '../components/BoxResults';
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

import API from "../utils/searchApi";

//import { TextArea, FormBtn } from "../components/SearchBar";
//import Jumbotron from '../components/Jumbotron';
//import savedAPI from "../utils/savedApi";
// import Book from "../models/book"


// export default function Search() {
class Search extends React.Component {

    // Allow state changes for the form input values and books.
    state = {
        value: "",
        books: []
    }
    // console.log(state)
    // Imported & Defined our model {Book} as a queriedBook.
    queriedBook = bookData => {
        // console.log(queriedBook(bookData))
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }
    

    // Handles specific component mounting.
    componentDidMount() {
        this.queryBook();
    }

    // Function to Find book user is looking for.
    queryBook = query => {
        // Run call to API to query book info.
        API.searchBooks(query)
            .then(res => this.setState({
                books: res.data.items.map(
                    bookData => this.queriedBook(
                        bookData
                    ))
            })) 
            // Error handling
            .catch((err) => console.log(err));
        // Successful results. Show 10 books.
        console.log(query)
        // This is the Title of the first Book in the search.
        // console.log(res.data.items[0].volumeInfo.title)
    }

    
    // Grab SearchBar Input to and call it data
    handleInputChange = event => {
        var name = event.target.name 
        var value = event.target.value
        this.setState({ [name]: value })
        //console.log(value)
    }
    
    
    // Prevent form from restarting page upon submit
    handleFormSubmit = event => {
        event.preventDefault();
        this.queryBook(this.state.search);
    }

    render() {
        return (
            <div className="App" >
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
                            <SearchBar
                            handleInputChange= {this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            search={this.state.search}
                            />
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
                            <BoxResults
                                books={this.state.books} />
                        </Col>
                        <Col size="md-2 sm-12"></Col>
                    </Row>



                </Container>
            </div>

        );
    }
}

export default Search;




// Testing-----------------------------------------------------
// 
// queryBook = (event) => {
//     event.preventDefault();

//     var userData = { search: formObject }
//     console.log(userData)


//     // Run call to API for book info.
//     API.searchBooks(userData.search)
//         .then(function (res) {
//             console.log(res.data.items)
//             // Error handling
//             if (res.data.items.length === 0) {

//                 console.log("We didn't find anything.");
//             }
//             // Successful results. Show 10 books.
//             console.log(res.data.items[0].volumeInfo)
//             // This is the Title of the first Book in the search.
//             console.log(res.data.items[0].volumeInfo.title)
//         })
//         .catch((err) => console.log(err));
// }
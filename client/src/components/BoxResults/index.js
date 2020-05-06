import React, { Component } from "react";
import "./style.css";

import searchAPI from "../../utils/searchApi";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
class BoxResults extends Component {

  state = {
    getBooks: [],
  }

  componentDidMount() {
    searchAPI.getBooks()
      .then(getBooks => this.setState({ getBooks: getBooks }))
      .catch(err => console.log(err));
  }

  handleSave = (book) => {
    searchAPI.saveBooks(book)
      .then(console.log(
        book + " ......that book was saved with BoxResults Ln23."),
        getBooks => this.setState({
          getBooks: this.state.getBooks.concat([
            getBooks
          ])
        }))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>

        {!this.props.books.length ? (
          <h4 className="text-center">Search for a book above</h4>
        ) : (
            <div>
              {this.props.books.map(result => (
                <div className="card mb-3"
                  key={result._id}>
                  <div className="row">

                    <div className="col-md-2">
                      <img alt={result.title}
                        className="img-fluid" src={result.image} />
                    </div>



                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">
                          Title: {result.title}
                          Author: {result.authors}
                        </h5>
                        <p className="card-text">{result.description}</p>
                      </div>
                    </div>

                    <div>
                      <a href={result.link}
                        className="btn btn-primary mt-3"
                        target="_blank" >View<i class="fas fa-shipping-fast"></i></a>
                    </div>
                    <div>
                      <button
                        onClick={() => this.handleSave(result)}
                        className="btn btn-dark mt-3 ml-3" >
                        Save <i class="far fa-save"> Book</i>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

      </div>
    );
  }
}

export default BoxResults;



//-------------------------------TESTING



{/* <div className="content">
<ul>
  <li>
    <strong>Title:</strong> {props.title}
  </li>
  <li>
    <strong>Author:</strong> {props.Author}
  </li>
  <li>
    <strong>Description:</strong> {props.description}
  </li>
  <li>
    <strong>Link:</strong> {props.link}
  </li>
  <li>
    <strong>Cover Art:</strong> {props.image}
  </li>
</ul>
</div> */}










// Jumbotron syntax
//       <div
//         style={{ height: 100, clear: "both", paddingTop: 120, textAlign: "center" }}
//         className="jumbotron"
//       >
//         {children}
//       </div> 


      //-----------------------------------------------------
// This file exports both the List and ListItem components

// export function BoxWrapper()

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   ); 
// }

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }
//-------------------------------------------------------
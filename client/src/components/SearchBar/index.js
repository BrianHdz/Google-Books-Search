import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          onChange={props.handleInputChange}
          name="search"
          type="text"
        />
      </div>

      <div>
        <button
          style={{ float: "right", marginBottom: 10 }}
          className="btn btn-primary align-self-center"
          onClick={props.handleFormSubmit}>Find Books
    </button>
      </div>
    </form>
  );
}

export default SearchBar;

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="1" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button
//       style={{ float: "right", marginBottom: 10 }}
//       className="btn btn-primary align-self-center"
//       onClick={props.handleClick}>Find Books
//     </button>
//   );
// }


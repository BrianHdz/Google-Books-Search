import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array


function BoxResults(props) {
  // console.log(props)
  return (
    <div className="card">
      
      <div className="content">
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
      </div>
      
    </div>
  );
}

export default BoxResults;



//-------------------------------TESTING
 
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
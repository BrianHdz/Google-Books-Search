import React from "react";
import "./style.css";


function Jumbotron(props) {

  const bookData = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  };

  

  return (
    <>
      <hr />
      <article className="card mb-3">
        <div className="row no-gutters">
          
          <figure className="col-md-2">
            <p className="image is-64x64">
              <img src={props.image} alt={props.title} />
            </p>
          </figure>
          
          
          <div className="col-md-9">
            <div className="content">
              <p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-lg btn-outline-dark">
                    <strong>{props.title}</strong>
                  </button>
                </a>
                <br />
                {props.authors !== undefined && props.authors.length !== 0 ? (
                  <>
                    <span>Written by: </span>
                    {props.authors.map((author) => (
                      <span key={author}>
                        <br />
                        {author}
                      </span>
                    ))}
                    <br />
                  </>
                ) : (
                    <></>
                  )}
                <br />
                {props.description}
              </p>
            </div>
          </div>


          
          <div className="col-md-1">

            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-lg btn-outline-dark">
                <strong>{props.title}</strong>
              </button>
            </a>
            <br />

            <button
              className="btn btn-lg btn-outline-dark"
              data-title={props.title}
              onClick={() => props.handleSave(bookData)}
            >
              <i className="far fa-save"></i>
            </button>

            <button
              className="btn btn-lg btn-outline-dark"
              onClick={() => props.handleDelete(props.id, props.title)}
            >
              <i className="fas fa-minus-circle"></i>
            </button>

          </div>
        </div>
      </article>
    </>
  );
}

export default Jumbotron;

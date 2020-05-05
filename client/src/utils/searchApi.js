import axios from "axios";
//require("dotenv").config();

export default {
  // Find the queried book
  searchBooks: function (query) {
   console.log (query + ".................searchApi results")
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Save book to Mongo
  saveBooks: function (bookData) {
    return axios.post("/api/books", bookData)
    .then(result => result.data);
  },
  // Return saved books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Delete
  deleteBooks: function (id) {
    return axios.delete("/api/books/" + id);
  }

};
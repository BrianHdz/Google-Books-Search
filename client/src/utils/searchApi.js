import axios from "axios";
//require("dotenv").config();

export default {
  searchBooks: function (query) {
   console.log (query + ".................searchApi results")
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  // searchBooks: function (query) {
  //   console.log (query + ".................searchApi results")
  //   return axios.get(
  //     "https://www.googleapis.com/books/v1/volumes?q=" + { params: {query} })
  // },
  
};
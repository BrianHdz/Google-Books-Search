import axios from "axios";

export default {
  saveBooks: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBooks: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
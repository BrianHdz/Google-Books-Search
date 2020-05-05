const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "On the Road",
    authors: ["Jack Kerouac"],
    description:
      "Follows the counterculture escapades of members of the Beat generation as they seek pleasure and meaning while traveling coast to coast.",
    image: "https://books.google.com/books/content?id=3MUfAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api%22",
    link: "http://books.google.com/books?id=3MUfAQAAIAAJ&dq=%24ontheroad&hl=&source=gbs_api
  }
];


db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

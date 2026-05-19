
// Import/load mongoose library
const mongoose = require("mongoose");

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Title is required.'], trim: true},
    author:  {type: String, required: [true, 'Author is required.'], trim: true},
    isbn:  {type: String, required: [true, 'ISBN is required'], unique: true, trim: true},
    publishedDate:  {type: Date, required: [true, 'Published date is required']},
    inStock: {type: Boolean, default: true}
});

// Create the Book model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
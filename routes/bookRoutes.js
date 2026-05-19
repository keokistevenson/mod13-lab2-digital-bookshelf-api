const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// Create: POST / - Creates a new book using the data in req.body.
router.post("/", (req, res) => {

    // PROMISE CHAINING STYLE:
    // Book.create creates the document and saves it to MongoDB automatically
    Book.create(req.body)
        .then(createdBook => {
            console.log('Book created successfully:', createdBook);
            res.status(201).json(createdBook);
        })
        .catch(err => {
            console.error('Error creating book:', err);
            res.status(400).json({ message: "Failed to create book." });
        });
});

// Read All: GET / - Retrieves all books from the database.
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        console.log('Books retrieved successfully:', books);
        res.status(200).json(books);

    } catch (error) {
        console.error('Error retrieving books:', error);
        res.status(500).json({ message: "Failed to retrieve books." });
    }
});

// Read One: GET /:id - Retrieves a single book by its _id.
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found." });
        }
        console.log('Book retrieved successfully:', book);
        res.status(200).json(book);
    } catch (error) {
        console.error("Error retrieving book:", error);

        res.status(500).json({ message: "Failed to retrieve book." });
    }
});

// Update: PUT /:id - Updates a book by its _id using the data in req.body.
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found." });
        }

        res.status(200).json(updatedBook);

    } catch (error) {
        console.error("Error updating book:", error);

        res.status(400).json({ message: "Failed to update book." });
    }
});

// Delete: DELETE /:id - Deletes a book by its _id.
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found." });
        }

        res.status(200).json({
            message: "Book deleted successfully.",
            deletedBook: deletedBook
        });
    } catch (error) {
        console.error("Error deleting book:", error);

        res.status(500).json({ message: "Failed to delete book." });
    }
});

module.exports = router;
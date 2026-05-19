const express = require("express");
const router = express.Router();

// Create: POST / - Creates a new book using the data in req.body.
router.post("/", (req, res) => {

    // PROMISE CHAINING STYLE:
    // Book.create creates the document and saves it to MongoDB automatically
    Book.create({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        publishedDate: req.body.publishedDate,
        inStock: req.body.inStock,
    })
        .then(createdPost => {
            console.log('Post created successfully:', createdPost);
            res.status(201).json(createdBook);
        })
        .catch(err => {
            console.error('Error creating post:', err);
            res.status(500).json(createdBook);
        });
});

// Read All: GET / - Retrieves all books from the database.
router.get("/", () => {
    try {

    } catch (error) {

    }
});

// Read One: GET /:id - Retrieves a single book by its _id.
router.get("/", () => {
    try {

    } catch (error) {

    }
});

// Update: PUT /:id - Updates a book by its _id using the data in req.body.
router.put("/", () => {
    try {

    } catch (error) {

    }
});

// Delete: DELETE /:id - Deletes a book by its _id.
router.delete("/", () => {
    try {

    } catch (error) {

    }
});

module.exports = router;
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    BookName: {
      type: String,
      required: true,
    },
    BookTitle: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    SellingPrice: {
      type: String,
      required: true,
    },
    PublishDate: {
      type: String,
    },
  },
  { timestamps: true }  //It automatically adds two fields to each document: createdAt: The date & time the document was created. updatedAt: The date & time the document was last updated.
);

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };

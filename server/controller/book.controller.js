const { Book } = require("../model/book.model.js");
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      return res.status(400).json({
        Message: "All Field's Required",
        Success: false,
      });
    }

    const bookAdd = await Book.insertOne(body);
    // console.table(bookAdd);
    // console.log(bookAdd);

    if (bookAdd) {
      return res.status(201).json({
        Message: "Data Created Successfully !",
        Success: true,
        Id: bookAdd?._id,
      });
    }
  } catch (error) {
    return res.status(500).json({
      Message: error.Message,
      Success: false,
    });
  }
};

const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find({});
    return res.status(200).json({
      Message: "All Books Fetched Successfully",
      Success: true,
      TotalCount: bookList.length,
      BookList: bookList,
    });
  } catch (error) {
    return res.status(400).json({
      Message: error.Message,
      Success: false,
    });
  }
};

const handleBookDeleteController = async (req, res) => {
  const body = req.body;
  try {
    const deleted = await Book.deleteOne({ _id: body.Id });
    console.log(deleted);
    if (deleted.acknowledged) {
      return res.json({
        Message: "Book Deleted Successfully",
        Success: true,
      });
    }
  } catch (error) {
    return res.status(400).json({
      Message: error.Message,
      Success: false,
    });
  }
};

const handleBookUpdateController = async (req, res) => {
  try {
    const body = req.body;

    const Updating = await Book.updateOne({ _id: body?.Id }, { $set: body });
    // console.log("Updating", Updating);

    if (Updating?.acknowledged) {
      return res.json({
        Message: "Book Updated Successfully !",
        Success: true,
      });
    }
  } catch (error) {
    return res.status(400).json({
      Message: error.Message,
      Success: false,
    });
  }
};

module.exports = {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController,
};

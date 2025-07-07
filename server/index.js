const express = require("express");
const databaseConnection = require("./config/database.js");
const booRouter = require("./routes/book.routes.js")
const cors = require("cors")
// DB Connection
databaseConnection();


const app = express();
app.use(express.json());   //middleware
app.use(cors());
const port = 8000;


// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/book',booRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

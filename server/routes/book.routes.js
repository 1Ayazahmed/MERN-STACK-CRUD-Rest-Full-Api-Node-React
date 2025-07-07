const express = require('express');
const {handleBookStoreController} = require("../controller/book.controller.js")


const router = express.Router(); 


//http://localhost:8000/book/addbook
router.post('/addbook',handleBookStoreController)


module.exports =  router;
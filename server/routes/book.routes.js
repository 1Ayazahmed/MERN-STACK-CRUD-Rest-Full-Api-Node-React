const express = require('express');
const {handleBookStoreController,handleBookListController, handleBookDeleteController,handleBookUpdateController} = require("../controller/book.controller.js")


const router = express.Router(); 


//http://localhost:8000/book/addbook
router.post('/addbook',handleBookStoreController)
router.get('/booklists',handleBookListController)
router.post('/deletebook',handleBookDeleteController)
router.put('/updatebook',handleBookUpdateController)





module.exports =  router; 

// POS to Direct into bank

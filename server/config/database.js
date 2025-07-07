const mongoose = require("mongoose")
// import mongoose from "mongoose";

const databaseConnection =  async () =>{

       mongoose.connect("mongodb://localhost:27017/bookstore")
        .then(()=>{
            console.log("DataBase Connected Successfully ! 👍");
            
        })
     .catch ((error)=> {
        console.error("DataBase Connection Failed ⚠",error);  
    })
};

module.exports = databaseConnection;
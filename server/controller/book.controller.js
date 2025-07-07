const {Book} = require("../model/book.model.js")
const handleBookStoreController = async (req,res) =>{
 try {
    const body = req.body;

    if(!body.BookName || 
        !body.BookTitle || 
        !body.Author || 
        !body.SellingPrice ||
        !body.PublishDate)
        {
        return res.status(400)
        .json(
            {
                Message:"All Field's Required",
                Success:false
            }
        )
        }

        const bookAdd = await Book.insertOne(body)
        // console.table(bookAdd);
        // console.log(bookAdd);

        if(bookAdd){
            return res.status(201)
        .json(
            {
                Message:"Data Created Successfully !",
                Success:true,
                Id:bookAdd?._id,
            });
        }
        
        


 } catch (error) {
    return res.status(500)
        .json(
            {
            Message:error.Message,
            Success:false
        }
        );
    
 }
}


module.exports = {handleBookStoreController}
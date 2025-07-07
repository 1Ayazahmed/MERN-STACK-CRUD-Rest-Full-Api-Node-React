import React from "react";
import { useState } from "react";
import { bookBaseUrl } from "../axiosinstance";
const Home = () => {
const [bookForm, setBookForm] = useState({
 
  BookName: "",
  BookTitle: " ",
  Author: "",
  SellingPrice: "",
  PublishDate: " ",
});


const handleFormChange=(e)=>{
  const {name,value} = e.target;
setBookForm((prev)=>({
  ...prev,
  [name]:value
}))
};

// console.log("bookForm",bookForm);

const handleSubmit = async ()=>{
  try {

    const data = await bookBaseUrl.post('/addbook', bookForm)
    console.log(data);
    console.table(data);
    
    
  } catch (error) {
    console.log(error);
    
    
  }
}


  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)] py-4 ">
      <div className="w-full grid grid-cols-5 gap-3 my-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            className="w-full border-2 border-gray-300 text-gray-800 ps-2 h-8 rounded-sm outline-none "
            name="BookName"
            value={bookForm.BookName}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            className="w-full border-2 border-gray-300 text-gray-800 ps-2 h-8 rounded-sm outline-none "
              name="BookTitle"
            value={bookForm.BookTitle}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Author"
            className="w-full border-2 border-gray-300 text-gray-800 ps-2 h-8 rounded-sm outline-none "
              name="Author"
            value={bookForm.Author}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            className="w-full border-2 border-gray-300 text-gray-800 ps-2 h-8 rounded-sm outline-none "
            name="SellingPrice"
            value={bookForm.SellingPrice}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date</label>
          <input
            type="date"
            placeholder="Publish Date"
            className="w-full border-2 border-gray-300 text-gray-800 ps-2 h-8 rounded-sm outline-none"
            name="PublishDate"
            value={bookForm.PublishDate}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-gray-700 text-white h-9 w-22 rounded-md cursor-pointer" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="w-full mt-10">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
                {/* <h1>Table Head</h1> */}
              <tr>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" >Book Name</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Title</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selling Price</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Publish Date</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>

              </tr>
            </thead>
            <tbody className=" bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-200">
                    <td className="px-6 py-3 whitespace-nowrap">Shaboo</td>
                    <td className="px-6 py-3 whitespace-nowrap">Shaboo Harami</td>
                    <td className="px-6 py-3 whitespace-nowrap">Adeeba Gull </td>
                    <td className="px-6 py-3 whitespace-nowrap">200</td>
                    <td className="px-6 py-3 whitespace-nowrap">Today</td>
                    <td className="px-6 py-3 whitespace-nowrap">Harami</td>


                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

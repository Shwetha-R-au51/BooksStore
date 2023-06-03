import express from "express";
import Books from "../models/books.js";


//Api to get the list of all books


export const getAllBooks = async (req,res)=>{
    try{
    const AllBooks= await Books.find({});
    res.status(200).json({data:AllBooks});
    }
    catch(err){
        res.status(400).json({success:false,message:"error occured",});
    }
}

//Api to ge details of perticular book by id 


export const getSingleBookByID = async(req,res)=>{
    const Id=req.params.id;
    try{
        const BookByID= await Books.findById(Id);
        res.status(200).json({data:BookByID});
        }
        catch(err){
            res.status(400).json({success:false,message:"error occured",});
        }
}


/* Api to add new books in to the database
Below sample data to insert data in to database
{
  "title":"The India Story",
  "author":"Bimal Jalal",
  "Description":"",
  "year":"2022"
} */


export const CreateNewBook = async(req, res) => {
    try{
    const data=new Books({
        title:req.body.title,
        author:req.body.author,
        Description:req.body.Description,
        year:req.body.year
    });
    const savedBooks=await data.save();
      res.json(savedBooks);
    }
    catch(err){
        res.status(400).json({success:false,message:"error occured",});
    }
}


 /*  Api to update the perticular book details by id
  in line number 38, i have inserted Description as empty, we can update the description for the perticular Books
  Below sample data to insert data in to database
  {
  "Description":"Book return about India"
  } */

export const updateBookByID = async (req, res) => {
     const id = req.params.id;
      
    try {
        const updatedUser = await Books.findByIdAndUpdate(
         id,
        {
             $set: req.body,
         },
            { new: true }
        );
      
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser,
          });
        } catch (err) {
          res.status(500).json({
            success: false,
            message: "failed to update",
        });
    }
};
      
//Api to delete perticular book by using id.

export const DeleteBooks = async(req,res)=>{
    const Id = req.params.id;

    try {
      await Books.findByIdAndDelete(Id);
  
      res.status(200).json({
        success: true,
        message: "Successfully deleted",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "failed to delete",
      });
    }
  };
 
  //Api to search for title ,author or description
  export const GetSearchResult=async(req,res)=>{
    try{
      let data=await Books.find({
        "$or":[
          {"title":{$regex:req.params.key}},
          {"author":{$regex:req.params.key}},
          {"Description":{$regex:req.params.key}}
        ]
      })
    }
    catch (err) {
        res.status(500).json({
          success: false,
          message: "failed to search",
        });
    }
  }

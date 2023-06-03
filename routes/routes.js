import express from "express";
const router=express.Router();
import {getAllBooks,getSingleBookByID,CreateNewBook,updateBookByID,DeleteBooks,GetSearchResult} from "../controllers/controller.js";


router.get("/books",getAllBooks);

router.get("/books/:id",getSingleBookByID);

router.post("/books",CreateNewBook);

router.put("/books/:id", updateBookByID);

router.delete("/books/:id",DeleteBooks);
router.get("/books/:key",GetSearchResult);
export default router;
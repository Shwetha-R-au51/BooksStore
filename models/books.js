import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
     
    },
    Description: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

}
);

const Books=new mongoose.model("BookStore", BookSchema);

export default Books;
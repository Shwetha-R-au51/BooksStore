import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import body_parser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(body_parser.json());

app.use("/api/v1",router);

//MongoDB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
console.log(` connected to mongodb `);
}).catch((error)=>{console.log(`${error} unable to connect to mongo db `)});
//localhost connection

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
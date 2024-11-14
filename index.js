
import express from "express";
const app= express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "../crud/router/userroute.js"
dotenv.config();


app.use(express.json());
const port=process.env.PORT || 5000;
const MONGO_URL= process.env.MONGO_URL;

main()
    .then(()=>{
        console.log("connected to db");
        app.listen(port,()=>{
            console.log(`server is runing at port ${port}`);
        });
    })
    .catch((err)=>{
        console.log("erroer");

    });
        
async function main(){
    await mongoose.connect(MONGO_URL);

}


app.use("/api/user",route);



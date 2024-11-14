
import express from "express";
import {createuser,fetchAll,updateOne,getOne,deleteOne} from "../controller/usercontroler.js";


const route = express.Router();


//create
route.post("/creates",createuser);

//fetch
route.get("/users",fetchAll);




//update
route.put("/edit/:id",updateOne);

//getone
route.get("/users/:id",getOne);

//delete
route.delete("/delete/:id",deleteOne);

export default route;


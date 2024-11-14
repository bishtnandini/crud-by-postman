import user from "../models/users.js"


//create

export const createuser = async(req,res)=>{
    try{
        const userdata=new user (req.body);
        const {name}=userdata;
        const existuser=await user.findOne({name});
        if(existuser){
            return res.status(400).json({message:"exist"});
        }
        const saveData=  await userdata.save();
        res.status(200).json(saveData);

    }
    catch(err){
        res.status(500).json({error:"error"});
    }
   


};

//fetch all data

export const fetchAll = async(req,res)=>{
    try{
        const AllData= await user.find({});
        if(AllData.length==0){
            return res.status(404).json({message:"no data present"});

        }

        res.status(200).json(AllData);
    }
    catch(err){
        res.status(500).json({error:"error"});
    }
};

//update

 export const updateOne=async(req,res)=>{
    try{
        const id=req.params.id;
        const User=await user.findOne({_id:id});
        if(!User){
              return res.status(404).json({message:"no user exists"});
        }
        const updateu= await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updateu);

    }

    catch(err){
        res.status(500).json({error:"error"});
    }
 } ;



 //getone

 export const getOne=async(req,res)=>{
    try{
        const id=req.params.id;
        const UserO=await findOne({_id:id});
        if(!UserO){
              return res.status(404).json({message:"no user exists"});
        }

        res.status(200).json(userO);

    }
    catch(err){
        res.status(500).json({error:"error"});

    }
 } ;



//delete

 export const deleteOne=async(req,res)=>{
    try{
        const id=req.params.id;
        const User=await user.findOne({_id:id});
        if(!User){
              return res.status(404).json({message:"no user exists"});
        }
        const updateu= await user.findByIdAndDelete(id);
        res.status(201).json(updateu);

    }

    catch(err){
        res.status(500).json({error:"error"});
    }
 } ;



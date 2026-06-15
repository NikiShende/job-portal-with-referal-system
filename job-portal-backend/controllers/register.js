
const express=require("express");

const db=require("../config/db")
const bcrypt = require("bcrypt");

const register= async(req,res)=>{

    const { fullname, email , password, role}= req.body;
    console.log(req.body);
    if(!fullname || !email || !password || !role){
        res.status(400).json({error:"please enter all fields"})
    }


    //check user exists or not
   db.query("select * from register where email=?",[email],async(err,result)=>{
    if(err){
        return res.status(400).json(err)
    }
    if(result>0){
            return res.status(400).json({message:"user alredy exists"})
    }
    
     const hashedPassword = await bcrypt.hash(password.toString(), 16);
   

    db.query("insert into register(full_name,email,password,role) values (?,?,?,?)",
     [fullname,email,hashedPassword,role],
    (err,result)=>{
       if(err) return res.status(400).json(err);
      res.status(201).json({message:"user registered successfully"})
     }
     );

   })
   //hashed password using bcrypt

 



}



module.exports=register;

const db=require("../config/db.js");
const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const secret="mykeys"
const login=async(req,res)=>{
           
  const {email,password}=req.body;


  db.query("select*from register where email=?",[email],async(err,result)=>{
    if(err) return res.status(500).json({err});
    if(result.length===0){
        return res.status(400).json({message:"user not found"})
    }

    const user=result[0];

    const isMatch=await bcrypt.compare(password.toString(),user.password);
    if(!isMatch){
        return res.status(400).json({message:"invalid credentials"})
    }


//creates token


    const token=jwt.sign({
      id:user.id,
      email:user.email,
      role:user.role
    }
    ,secret
  )
  console.log(token)

    // req.session.user={
    //          id: user.id,
    //         name: user.full_name,
    //         email: user.email,
    //         role: user.role
    // }
    // console.log(req.session.user)



    res.json({
        message:"login succesful",
        token,
        user:{
           id: user.id,
            name: user.full_name,
            email: user.email,
            role: user.role
        }

    })

  })

}
module.exports=login;
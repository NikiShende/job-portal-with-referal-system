const db=require("../config/db.js");




const submitJob=(req,res)=>{
   const {fullName,email,mobileNo,resume,cover_letter,refferer_id}=req.body;

  if(!fullName || !email || !mobileNo || !resume ||!cover_letter){
    return res.status(400).json({message:"all fields are required"})
  }


  db.query("insert into application (refferer_id,fullName,email,mobileNo,resume,cover_letter)values (?,?,?,?,?,?)",
    [refferer_id,fullName,email,mobileNo,resume,cover_letter],async(err,result)=>{
        if(err){
            console.log(err);
            return res.status(400).json({message:"something went wrong"})
        }
        res.status(200).json({message:"job submited successfully"})

  })



}


module.exports=submitJob;


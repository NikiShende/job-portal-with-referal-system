
const jwt=require('jsonwebtoken')
const secret="mykeys"
const auth=(req,res,next)=>{

    const authHeaders=req.headers.authorization;
    if(!authHeaders){
        res.status(401).json({
            message:"access denied"
        })
    }

    const token=authHeaders.split(" ")[1];


   try{
     const decoded=jwt.verify(
        token,
        secret
    );
    req.user=decoded;
    
    next();
   }catch(err){
    return res.status(400).json({
        message:"invalid token"
    })
   }
}
const db=require("../config/db.js");



const getjobs=(req,res)=>{
    const {search="",type="",location="",feild=""}=req.query;

    let sql="SELECT * FROM jobs WHERE 1=1"

    const values=[];

    if(search){
        sql+=" AND job_title LIKE ?";
        values.push(`%${search}%`)
    }

    if(type){
        sql+=" AND job_type=?";
        values.push(type)
    }


    if(location){
        sql+=" AND location=?";
        values.push(location)
    }

    if(feild){
        sql+=" AND feild=?";
        values.push(feild)
    }

    db.query(sql,values,(err,result)=>{
     if(err){
        return res.status(400).json({message:"db eror"})
     }
     res.json(result)
     

    })




}


module.exports=getjobs;

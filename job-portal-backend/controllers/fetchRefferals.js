const db=require("../config/db.js")




const fetchRefferals=(req,res)=>{
    const {id}=req.params;

       const sql = `
    SELECT
        a.appl_id,
        a.fullName,
        a.email,
        a.mobileNo,
        a.resume,
        a.cover_letter,
        a.status,
        a.applied_at,
        j.job_title
    FROM application a
    LEFT JOIN jobs j
        ON a.job_id = j.job_id
    WHERE a.refferer_id = ?
    ORDER BY a.applied_at DESC
    `;

    db.query(sql,[id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);

    });

};


module.exports=fetchRefferals;
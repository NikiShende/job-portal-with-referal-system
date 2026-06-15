const db = require("../config/db");



const getReferrers = (req,res)=>{



    db.query(

        "SELECT id, full_name FROM register WHERE role='refferer'",

        (err,result)=>{



            if(err){

                return res.status(500).json(err);

            }



            res.json(result);



        }

    );

};



module.exports = getReferrers;


const register=require("../controllers/register");
const login=require("../controllers/login");
const express=require("express")
const getjobs=require("../controllers/getjobs")
const sumbmitjob=require("../controllers/submitjob");
const getRefferers=require("../controllers/getReffers");
const fetchRefferals=require("../controllers/fetchRefferals");
const router=express.Router();
// const auth=require("../middlewares/auth");




router.post("/register",register);
router.post("/login", login);
router.get("/getjobs",getjobs);
router.get("/getReffers",getRefferers);
router.post("/submitjob", sumbmitjob);
router.get("/fetchRefferals/:id",fetchRefferals)



module.exports=router;
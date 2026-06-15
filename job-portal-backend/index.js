const express=require("express")
const app=express();
const db=require("./config/db")
const authRoutes=require("./routes/routes")
const cors=require("cors")
// const session=require("express-session");
const jwt=require('jsonwebtoken');


app.use(cors(
  {
    origin:"http://localhost:5173",
    credentials:true
  }
));
app.use(express.json());    //it is one type of middleware used to convert the data  comes from req.body into json object


 //session auth
// app.use(session({
//     secret:"mykey",
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         secure:false,
//         maxAge:24*60*60*1000
//     }

// }))

app.use("/api/user",authRoutes)





const port=3000;
app.listen(port,()=>{
 console.log(`server is running at port ${port}`)
});
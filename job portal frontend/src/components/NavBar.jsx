import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
 
      return (
    <div className="Nav-bar">
       <div className="left-part">
              CareerBridge
             {/* <img src="src/assets/job-icon.png" alt="" /> */}
        </div>    
        <div className="right-part">
             <div className="box">
              <Link to="/">Home</Link>
              </div>
             <div className="box">
              
                <Link to="/jobs">Jobs</Link></div>
             <div className="box">
              Profile
              </div>
             <div className="box">
               <button className="signin-but"> 
                <Link to="/signin">signin</Link></button>
                </div>
             <div className="box">
                <button className="singup-but">
                   <Link to="/signup">signup</Link>
                </button>
             </div>
      
        </div>
     
    </div>
  )
}

export default NavBar



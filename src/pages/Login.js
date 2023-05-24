import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {loginUser} from "../actions/UserAction"
import { NavLink } from 'react-router-dom';
import StudentIMage from "../Images/student (2).jpg"

const Login = () => {
  const [password,setPassword]=useState();
  const [roll_no,setRoll_no]=useState();
  const dispatch=useDispatch();

  const PostData=()=>{
    const user= {password, roll_no}
    dispatch(loginUser(user));
  }
  return (
    <div >
    <div className="LoginPage"></div>
    <div className="login_container p-1">
        <div className="col-md-6 m-auto" style={{opacity:1}}>
            <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Libary Management System</p>
            <img src={StudentIMage} alt="StudentIMage" style={{height:"220px",width:"220px",borderRadius:"50%"}} />
        <div style={{marginTop:"20px"}}>
            <input type="text" className="form-control" style={{height:"60px",borderRadius:"20px"}}
             placeholder="roll_no" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
        </div>
        <br />
        <div>
            <input type="text"  style={{height:"60px",borderRadius:"20px"}} className="form-control" placeholder="password"
             value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
         <br />
         <button className=" border-0" style={{width:"100%",height:"60px",color:"white",borderRadius:"20px",backgroundColor:"rgb(0, 217, 255)"}} onClick={() => PostData()}>
            Login 
        </button>
        </div>
        <br />
        <NavLink to="/register"  style={{fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>If you don't have account then plz Register</NavLink>
      </div>
  </div>
  )
}

export default Login
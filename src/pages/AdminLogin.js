import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/UserAction";
import { useDispatch } from 'react-redux'
import AdminIMage from "../Images/admin.png"

const AdminLogin = () => {

    const [password, setPassword] = useState("");
    const [roll_no, setRoll_no] = useState("")
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password, roll_no }
        dispatch(loginUser(user))
    };



    return (
        <div >
            <div className="LoginPage"></div>
            <div className="login_container p-1">
                    <div className="col-md-6 m-auto" style={{opacity:1}}>
                        <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Libary Management System</p>
                        <img src={AdminIMage} alt="StudentIMage" style={{height:"220px",width:"220px",borderRadius:"50%"}} />
                        <br />
                    <div style={{marginTop:"20px"}}>
                        <input type="text" className="form-control" style={{height:"60px",borderRadius:"20px"}}
                         placeholder="Employee Id" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <input type="password"  style={{height:"60px",borderRadius:"20px"}}
                        className="form-control" placeholder="Password"
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                     <br />
                    <button className=" border-0" style={{width:"100%",height:"60px",color:"white",borderRadius:"20px",backgroundColor:"rgb(0, 217, 255)"}} onClick={() => PostData()}>
                        Login 
                    </button>
                    </div>
                    <br />
                    <Link to="/"  style={{fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>Go To Home Page</Link>
            </div>
        </div>
    );
};



export default AdminLogin;
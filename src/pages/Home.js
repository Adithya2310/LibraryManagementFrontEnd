import React from 'react'
import { NavLink } from 'react-router-dom'
import StudentIMage from "../Images/student (2).jpg"
import AdminIMage from "../Images/admin.png"

const Home = () => {
  return (
    <div className="HomePage"  >

    <div className="col-md-6  m-auto text-center rounded-3 bg-grey" style={{display:"flex" ,padding:"5%"}}>
        <div className="card"style={{marginLeft:"15%"}}>
           <img className='rounded-5 p-1 pb-1' src={AdminIMage} alt="StudentIMage" style={{height:"250px",width:"13.5rem"}} />
           <br />
           <NavLink className="link_class" to="/adminLogin"> <h3 style={{fontFamily:"Oswald"}}>Signin as  Admin</h3></NavLink>
        </div>
        <div className="card" style={{marginLeft:"10%"}}>
           <img className='rounded-5 p-2' src={StudentIMage} alt="StudentIMage" style={{height:"250px",width:"13rem"}} />
           <br />
           <NavLink className="link_class" to="/login"> <h3 style={{fontFamily:"Oswald"}}>Signin as  Student</h3></NavLink>  
        </div>
    </div>
    </div>
  )
}

export default Home
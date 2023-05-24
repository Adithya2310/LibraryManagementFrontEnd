import React from 'react';
import {NavLink} from "react-router-dom"
import {logoutUser} from "../actions/UserAction"
import { useDispatch,useSelector } from 'react-redux';

const SideBar = () => {

    const dispatch=useDispatch();
    const {currentUser} = useSelector(state => state.userLoginReducer) ;
    return (
        <div style={{marginTop:"10%"}}>
            <ul>
               <li className="list_item"> <i className="fas fa-home text-white"></i> <NavLink  to="/dashboard/" 
               style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Home 
               </NavLink>  
               </li>
               <hr style={{color:"white"}} />
               <li> <i className="fab fa-facebook-messenger text-white"></i> 
               <NavLink  to="/dashboard/messages"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Messages 
               </NavLink>  
               </li>
               <hr style={{color:"white"}} />
               <li> <i className="fas fa-address-book text-white"></i>
                <NavLink  to="/dashboard/allBook"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> All Books 
                </NavLink>  
                </li>
               <hr style={{color:"white"}} />
                  {currentUser.user.isAdmin ? (
                      <>
                       <li> <i className="fas fa-book text-white"></i> 
                        <NavLink  to="/dashboard/addBook"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Add Book 
                        </NavLink>  
                        </li>
                        <hr style={{color:"white"}} />
                       <li> <i className="fas fa-users text-white"></i> 
                       <NavLink  to="/dashboard/manageStudent"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Manage Students 
                       </NavLink>  
                       </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-registered text-white"></i> 
                       <NavLink  to="/dashboard/stuReqIssue"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Issue Request 
                       </NavLink>  
                       </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> 
                       <NavLink  to="/dashboard/Recommandation"  
                        style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Book Recommandation 
                        </NavLink>  
                        </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> 
                       <NavLink  to="/dashboard/allissuedBook" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> All Issued Book 
                         </NavLink>  
                         </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> 
                       <NavLink  to="/dashboard/issue_return" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Today Issue Book 
                         </NavLink>  
                         </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-book text-white"></i> 
                       <NavLink  to="/dashboard/returnBook" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Today Return Book 
                         </NavLink>  
                         </li>
                       <hr style={{color:"white"}} />
                       <li> <i className="fas fa-users text-white"></i> 
                       <NavLink  to="/dashboard/addEmployee" 
                         style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Add Employee 
                         </NavLink>  
                         </li>
                       <hr style={{color:"white"}} />
                       </>  
                  ): (
                    <>
                    <li> <i className="fas fa-registered text-white"></i> 
                    <NavLink  to="/dashboard/RecomBook"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Recommended Book </NavLink>  </li>
                    <hr style={{color:"white"}} />
                    <li> <i className="fas fa-book text-white"></i> <NavLink  to="/dashboard/issuedBook" 
                      style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px",fontFamily:"Oswald"}}> Curently issued Book</NavLink>  </li>
                    <hr style={{color:"white"}} />
                    </>
                  )}
               <li onClick={() => dispatch(logoutUser())}> <i className="fas fa-power-off text-white"></i> 
                      <span style={{fontSize:"20px",color:"#fff",marginLeft:"2px",fontFamily:"Oswald"}}> Logout </span>    
                </li>
            </ul>
        </div>
  )
}

export default SideBar
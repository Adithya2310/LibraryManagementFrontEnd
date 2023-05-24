import React from 'react'
import {Routes,Route} from "react-router-dom";
import  Sidebar from "../components/SideBar"
import AddBook from "./AddBook"
import AllBook from "./AllBook"
import AllStudent from "./AllStudent"
import IssueRequest from "./IssueRequest"
import UserHome from "../components/UserHome"
import UserIssuedBook from "./UserIssuedBook"
import RecomBook from "./Recom_Book"
import RecomdationBook from "./Recommendation"
import Messages from "./Messages"
import AllIssuedBook from "./AllIssuedBooks"
import Navbar from "../components/NavBar"
import IssueReturn from "./Issue_Return";
import ReturnBook from "./ReturnBook"
import Addemployee from "./Add_Employee"



const Dashboard = () => {
  return (
    <div>
      <div style={{marginBottom:"64px"}}>
        <Navbar  />
      </div>
          <div style={{display:"flex"}}>
                <div className='sidebar' style={{height:"940px",marginLeft:"10px",width:"14%"}}>
                  <Sidebar  />         
                </div>
                <div style={{height:"940px",marginLeft:"10px",width:"80%"}}>
                <Routes>
                <Route>
                  <Route path="/" element={<UserHome/>}  />
                  <Route path="addBook" element={<AddBook/>}  />
                  <Route path="allBook" element={<AllBook/>}  />
                  <Route path="manageStudent" element={<AllStudent/>}  />
                  <Route path="issuedBook" element={<UserIssuedBook/>}  /> 
                  <Route path="allissuedBook" element={<AllIssuedBook/>}  /> 
                  <Route path="RecomBook" element={<RecomBook/>}  /> 
                  <Route path="Recommandation" element={<RecomdationBook/>}  /> 
                  <Route path="stuReqIssue"  element={<IssueRequest/>} />
                  <Route path="messages"  element={<Messages/>} />
                  <Route path="issue_return"  element={<IssueReturn/>} />
                  <Route path="returnBook"  element={<ReturnBook/>} />
                  <Route path="addEmployee"  element={<Addemployee/>} />
                </Route>
                </Routes> 
                </div>
          </div>
        </div>
  )
}

export default Dashboard
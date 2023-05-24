import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook"
import AllBook from "./pages/AllBook"
import AllStudent from "./pages/AllStudent"
import IssueRequest from "./pages/IssueRequest"
import UserHome from "./components/UserHome"
import UserIssuedBook from "./pages/UserIssuedBook"
import RecomBook from "./pages/Recom_Book"
import RecomdationBook from "./pages/Recommendation"
import Messages from "./pages/Messages"
import AllIssuedBook from "./pages/AllIssuedBooks"
import IssueReturn from "./pages/Issue_Return";
import ReturnBook from "./pages/ReturnBook"
import Addemployee from "./pages/Add_Employee"
import Login from "./pages/Login"
import AdminLogin from "./pages/AdminLogin"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import SignInForm from './components/SignInForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<SignInForm />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/adminLogin" exact element={<AdminLogin/>} />
          {/* <Route path="/addBook" elemen={AddBook} />
          <Route path="/allBook"element={AllBook} />
          <Route path="/manageStudent" elemen={AllStudent} />
          <Route path="/stuReqIssue" elemen={Messages} /> */}
          <Route path="/dashboard/*"  element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
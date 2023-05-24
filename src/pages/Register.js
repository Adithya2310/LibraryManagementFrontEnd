import SignInForm from "../components/SignInForm"
const Register = () => {
  return (
    <div >
        <div className="LoginPage"></div>
            <div className="login_container">
            <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Libary Management System</p>
                <SignInForm />
            </div>
        </div>
  )
}

export default Register
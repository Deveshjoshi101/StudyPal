
// eslint-disable-next-line no-unused-vars
import React from "react";
import './form-style/signIn.css'
// import signIn from "../components/signin.jsx"
function signIn() {
  

  return (
    <div className="form__background">
    <div className="form">
      <div className="form__img"><img src="images\bubble-gum-otp-verification.gif" alt="img" /></div>
      
     <form className="form__body" action="" method="post">
            <label htmlFor="">E-mail</label> <br />
            <input type="email" required/> <br />
            <label htmlFor="">Password</label> <br />
            <input type="password" required/> <br />
            <button type='submit'>SignIn</button>
        <div className="create__account"> <a href="http://" target="_blank" rel="noopener noreferrer">Create an account</a></div>
        </form>
        </div>
     
    </div>
  )
}

export default signIn

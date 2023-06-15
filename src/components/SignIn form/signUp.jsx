
// eslint-disable-next-line no-unused-vars
import React from "react";
import './form-style/signUp.css'

// import signIn from "../components/signin.jsx"
function App() {
  

  return (
  
    <div className="form__body">
            <div className="form__part">
                <div className="form__image">
                    <img className="image__form" src="src\assets\sammy-woman-working-on-laptop-checking-her-workflow.gif" alt=""  />
                </div>
                <div className="form__main">
                    <form action="" method="post">
                        <label htmlFor="" id="name">Full Name</label><br />
                        <input type="text"  required/><br />
                        <label htmlFor="email" id="email">E-mail</label><br />
                        <input type="email" name="" id="email" required/><br />
                        <label htmlFor="password" id="password">Password</label><br />
                        <input type="password" id="pasword" required /><br />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>

        </div>
    
  )
}

export default App

import React from 'react'
import './Login.css'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const handleSubmit = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};


function Login() {
  return (
    <div className="login-container">
    <div className="login-content">
         <h1>Welcome to KConnect</h1>
        
      <button onClick={handleSubmit} className="btn-login">
        Login to continue
      </button>
    </div>
  </div>
  )
}

export default Login

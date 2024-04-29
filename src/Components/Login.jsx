import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
export const Login = () => {
  return (
    <div className='login'>
      <Link to="/">
       <img className='login-logo' 
            src='https://pngimg.com/uploads/amazon/amazon_PNG6.png'
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in 😎</h1>
        <form>
            <h5>Email</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />

            <button className='loginSignin-btn'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's 
          Clone
          Condition of Use & Sale. Please 
          see our Privacy Notice, our Cookies Notice
          and our Interest-Based Ads 
          Notice.
        </p>

        <button className='loginRegistration-btn'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

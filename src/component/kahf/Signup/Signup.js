import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [code, setCode] = useState(false);
  console.log(code);
  return (
    <div className="container">
      <div className="img-page">
        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg" alt=""></img>
      </div>
      <div className="signup-page">
        <div className="signup-page-header">
          <div className="signup-title">
            <h1>welcome to kahf and let's join</h1>
          </div>
          <form className="signup-form">
            <label className="signup-form-label" for="name">
              Name
            </label>
            <input className="signup-form-input" type="text" name="name" placeholder="Your Name" />
            <label className="signup-form-label" for="email">
              Email
            </label>
            <input className="signup-form-input" type="email" name="email" placeholder="Your Email Adress" />
            <label className="signup-form-label" for="password">
              Password
            </label>
            <input className="signup-form-input" type="password" name="password" placeholder="Your Password" />
            <span>
              <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/view.png" alt=""></img>
            </span>
            <p id="already-signup">By clicking this button, you agree to Kahf's</p>
            <button className="button-signup">Register</button>
          </form>
        </div>
        <div className="signup-page-footer">
          <p>
            Already have an account?
            <a onClick={() => setCode(!code)} className="anchor">
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

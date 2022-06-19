import React, { useState } from 'react';
import './login.css';
import './signup.css';

const Login = () => {
  const [code, setCode] = useState(false);
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [obj, setObj] = useState({ email: '', password: '' });
  const handleObj = (e) => {
    let tempObj = { ...obj };
    tempObj[e.target.name] = e.target.value;
    setObj(tempObj);
  };
  const handleLogin = () => {
    let tempObj = { ...obj };
    return tempObj;
  };

  return (
    <>
      <div className="container">
        <div className="img-page">
          <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg" alt=""></img>
        </div>
        {code ? (
          <div className="login-page">
            <div className="login-page-header">
              <div className="login-title">
                <h1>welcome back and sign in your account</h1>
              </div>
              <form className="login-form">
                <label className="login-form-label" for="email">
                  Email
                </label>
                <input className="login-form-input" type="email" name="email" placeholder="Your Email Adress" value={obj.email} onChange={(event) => handleObj(event)} />
                <label className="login-form-label" for="password">
                  Password
                </label>
                <input className="login-form-input" type={isViewPassword ? 'text' : 'password'} name="password" placeholder="Your Password" value={obj.password} onChange={(event) => handleObj(event)} />
                <span>
                  <img onClick={() => setIsViewPassword(!isViewPassword)} src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/view.png" alt=""></img>
                </span>
                <div className="login-form-checkbox">
                  <input type="checkbox" id="remember-me"></input>
                  <label for="remember-me">Remember me</label>
                </div>
                <button className="button-login" onClick={() => handleLogin()}>
                  Log In
                </button>
              </form>
              <p id="forgot-password">
                Forgot your password? <a className="anchor">Click Here</a>
              </p>
            </div>
            <div className="login-page-footer">
              <p>
                Dont't have an account?
                <a onClick={() => setCode(!code)} className="anchor">
                  Sign up Here
                </a>
              </p>
            </div>
          </div>
        ) : (
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
                <input className="signup-form-input" type={isViewPassword ? 'text' : 'password'} name="password" placeholder="Your Password" />
                <span>
                  <img onClick={() => setIsViewPassword(!isViewPassword)} src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/view.png" alt=""></img>
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
        )}
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import "./LoginScreen.css";
import Logo from "./../assets/logo.png";
import SignupScreen from "./SignupScreen"

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={Logo} alt="" />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
      {signIn ? (
        <SignupScreen/>
      ) :(
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere, Cancel at any time.</h2>
          <h3>
            Ready to watch ? Enter your email to create or restart your
            membership.
          </h3>
          <div className="loginScreen__input">
            <from>
              <input type="email" placeholder="Email Address" />
              <button
                onClick={() => setSignIn(true)}
                className="loginScreen__getStarted"
              >
                GET STARTED
              </button>
            </from>
          </div>
        </>
      ) }
        
      </div>
    </div>
  );
}

export default Login;

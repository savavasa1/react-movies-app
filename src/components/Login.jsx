import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase.js";
import './Login.css'

const Login = (props) => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    mailRef.current.focus();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      if (document.activeElement === mailRef.current) {
        passwordRef.current.focus();
      } else if (document.activeElement === passwordRef.current) {
        buttonRef.current.focus();
      }
    } else if (event.key === "ArrowUp") {
      if (document.activeElement === buttonRef.current) {
        passwordRef.current.focus();
      } else if (document.activeElement === passwordRef.current) {
        mailRef.current.focus();
      }
    } else if (event.key === "Enter") {
      loginFn();
    }
  };

  const loginFn = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        mailRef.current.value,
        passwordRef.current.value
      );
      props.onLogin();
      const accessToken = response.user.accessToken;
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Your password is incorrect. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("Account with this email does not exist.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-text">
        Please sign in.
      </div>
      <form>
        <div>
          <label htmlFor="mail"></label>
          <input
            type="text"
            id="mail"
            required
            className="input-field"
            placeholder="Email"
            ref={mailRef}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            className="input-field"
            ref={passwordRef}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
        <button
          onClick={loginFn}
          className="button"
          ref={buttonRef}
          onKeyDown={handleKeyDown}
        >
          Log in
        </button>
        {errorMessage && <p className="error-msg">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;

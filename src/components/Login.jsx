import React, { useEffect, useRef } from "react";
import "./Login.css";
import { useMutation } from "@tanstack/react-query";
import loginMutation from "../features/movies/loginMutation.js";

const Login = (props) => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();
  const { mutate, error, isError} = useMutation({
    mutationFn: loginMutation,
    onSuccess: () => {
      props.onLogin();
    }
  });

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
      loginHandler();
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    const data = {
      email: mailRef.current.value,
      password: passwordRef.current.value,
    };

    await mutate(data);
  };

  return (
    <div className="login-container">
      <div className="login-text">Please sign in.</div>
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
          onClick={loginHandler}
          className="button"
          ref={buttonRef}
          onKeyDown={handleKeyDown}
        >
          Log in
        </button>
        {isError && <p className="error-msg">{error.message}</p>}
      </form>
    </div>
  );
};

export default Login;

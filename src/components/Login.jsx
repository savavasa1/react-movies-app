import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.js";

const Login = (props) => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold mb-4 text-[#F5F5F5]">Please sign in.</div>
      <form className="space-y-4">
        <div>
          <label htmlFor="mail"></label>
          <input
            type="text"
            id="mail"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            placeholder="Email"
            ref={mailRef}
          ></input>
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            ref={passwordRef}
          ></input>
        </div>
        <button
          onClick={loginFn}
          className="w-full py-2 px-4 bg-[#F5F5F5] text-[#000000] rounded-md hover:bg-[#E50914] hover:text-[#F5F5F5] transition-colors"
        >
          Log in
        </button>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;

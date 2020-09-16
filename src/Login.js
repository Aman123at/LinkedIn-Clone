import React from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth, provider } from "./firebase";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__header">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
          alt=""
        />
      </div>

      <p>Welcome to your professional community</p>
      <div className="login__input">
        <form>
          <input type="text" placeholder="Enter or phone number" />
          <br />
          <input type="password" placeholder="Password (6+ characters)" />
          <br />
          <button>Sign up/Sign in</button>
          <br />
          <button onClick={signIn}>Google Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

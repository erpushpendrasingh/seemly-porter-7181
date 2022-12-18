import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin, Logout, emailLogin } from "../Redux/AuthReducer/action";
import Profile from "./Profile";
import styles from "./Login.module.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch = useDispatch();
  // ONLY USE IF BUGS in reducer
  // const googleProvider = new GoogleAuthProvider();
  // const GoogleLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(emailLogin({ email, password }));
  };

  if (isAuth) {
    // return <Navigate to={"/"} />;
    return <Profile />;
  }
  if (!isAuth)
    return (
      <div className={styles.main}>
        <div className={styles.left}>
          <h1>The only fashion website you need</h1>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={styles.loginButton}
              type="submit"
              value="Continue"
            />
          </form>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div>
            <button
              className={styles.googleButton}
              onClick={() => dispatch(GoogleLogin())}
            >
              <FcGoogle /> Continue with Google
            </button>
          </div>
          <div>
            <p>
              By creating an account, you consent to Lyst’s&nbsp;
              <a
                className={styles.terms}
                href={
                  "https://www.lyst.com/account/register/?next=%2Fshop%2Fclothing%2F"
                }
              >
                Terms & Conditions.
              </a>
              To learn more about how Lyst uses and protects your personal data,
              please read Lyst’s &nbsp;
              <a
                className={styles.terms}
                href={
                  "https://www.lyst.com/account/register/?next=%2Fshop%2Fclothing%2F"
                }
              >
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.sliding}></div>
        </div>
      </div>
    );
};

export default Login;

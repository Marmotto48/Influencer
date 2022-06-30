import React, { useState, useEffect } from "react";
import "./login.css";
import { FaLinkedinIn, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { register, login, clearErrors } from "../../Redux/customers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snack from "../../components/MUI/Snackbar";

const Login = () => {
  window.addEventListener("scroll", (event) => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("login-container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });
  /******/
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({});
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(userInput));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userInput));
  };
  useEffect(() => {
    dispatch(clearErrors());
    if (customer.isAuth) {
      navigate("/dashboard");
    }
  }, [customer.isAuth, navigate, dispatch]);
  /***Snack**/
  const [openSnackError, setOpenSnackError] = useState(false);
  useEffect(() => {
    if (customer.loginErrors || customer.registerErrors) {
      setOpenSnackError(true);
    }
  }, [customer.loginErrors, customer.registerErrors]);

  return (
    <>
      <div className="login">
        <div className="two alt-two">
          <h1>
            <div style={{ wordSpacing: "15px" }}>CUSTOMER CONNECTION</div>
            <span>SIGNIN / SIGNUP</span>
          </h1>
        </div>
        <Snack
          openSnackError={openSnackError}
          setOpenSnackError={setOpenSnackError}
          severity="error"
          message={
            customer.loginErrors
              ? customer.loginErrors
              : customer.registerErrors
              ? customer.registerErrors
              : null
          }
        />
        {/* {fulfilled ? (
          <Snack
            openSnackError={openSnackError}
            setOpenSnackError={setOpenSnackError}
            severity="success"
            message="Logged in successfully !"
          />
        ) : null} */}
        <div className="login-container" id="login-container">
          <div className="form-container sign-up-container">
            <form action="#a">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#a" className="social">
                  <FaLinkedinIn style={{ fontSize: "18px" }} />
                </a>
                <a href="#a" className="social">
                  <FaFacebookF style={{ fontSize: "18px" }} />
                </a>
                <a href="#a" className="social">
                  <FaGooglePlusG style={{ fontSize: "20px" }} />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <button onClick={handleRegister}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#a">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#a" className="social">
                  <FaFacebookF style={{ fontSize: "18px" }} />
                </a>
                <a href="#a" className="social">
                  <FaGooglePlusG style={{ fontSize: "20px" }} />
                </a>
                <a href="#a" className="social">
                  <FaLinkedinIn style={{ fontSize: "18px" }} />
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <a href="#a">Forgot your password?</a>
              <button onClick={handleLogin}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

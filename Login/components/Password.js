import React from "react";
import LawLady from "../assets/lawlady.jpg";
import "./styling.scss";
import { Link, useNavigate } from "react-router-dom";
// import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";
import { verifyPassword } from "../helper/helper";
// import styles from "../styles/Username.module.css";

////
import { useState } from "react";
/////

export default function Password() {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth);
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);



  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        // navigate("/profile");
        navigate('/')
      });
    },
  });

  ///////
   const [showPassword, setShowPassword] = useState(false);

   const handleTogglePassword = () => {
     setShowPassword(!showPassword);
   };

  // if (isLoading) return <h1 >isLoading</h1>;
  // if (serverError)
  //   return <h1 >{serverError.message}</h1>;

  return (
    <div className="main-container flex prevent-select ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="main-section flex">
        <div className="image-section">
          <img src={LawLady} alt="" />
        </div>
        <div className="form-section">
          <div className="main-form">
            <h2>
              Welcome Back! {apiData?.firstName || apiData?.username}
            </h2>
            <h4>Please enter your details.</h4>
            <form
              onSubmit={formik.handleSubmit}
              className="input-form"
            >
              {/* ///////// */}
              <input
                {...formik.getFieldProps('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your Password"
              />

              <div className="toggle-password-button-section">
                <button
                  type="button"
                  className="toggle-password-button "
                  onClick={handleTogglePassword}
                >
                  {showPassword ? 'Hide' : 'Show'} Password
                </button>
              </div>
              {/* ///////// */}
              {/* <span className="Forgot-password-section">
                <Link to="/recovery">Forgot Password?</Link>
              </span> */}
              <button className="submit-button" type="submit">
                <h3>LOGIN</h3>
              </button>
              <div className="Forgot-password-section">
                <Link to="/recovery">
                  <h3> Forgot password ?</h3>
                </Link>
              </div>
            </form>
          </div>
          <div className="copyright-section">
            Copyright @Manav-Kumar 2023
          </div>
        </div>
      </div>
    </div>
  );
}

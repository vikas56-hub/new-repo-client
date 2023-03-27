import LawLady from "../assets/lawlady.jpg";
import "./styling.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";

import { registerUser } from "../helper/helper";
import Navbar from "../../components/Navbar/Navbar";



export default function Register() {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise.then(function () {
        navigate("/profile");
      });
    },
  });


  return (
    <div className="main-container flex prevent-select ">
      <Navbar/>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="main-section flex">
        <div className="image-section">
          <img src={LawLady} alt="" />
        </div>
        <div className="form-section">
          <div className="main-form">
            <h2>Welcome onboard !</h2>
            <h4>Please enter your details.</h4>
            <form onSubmit={formik.handleSubmit} className="input-form">
              {/* //////////////////////////////////////////////////////////////// */}
              <input
                {...formik.getFieldProps("email")}
                type="text"
                placeholder="Email*"
                // required
              />
              <input
                {...formik.getFieldProps("username")}
                type="text"
                placeholder="Username*"
                // required
              />
              <input
                {...formik.getFieldProps("password")}
                type="text"
                placeholder="Password*"
                // required
              />

              {/* //////////////////////////////////////////////////////////////// */}
              {/* <span className="Forgot-password-section">
                <Link to="/recovery">Forgot Password?</Link>
              </span> */}
              <button className="submit-button" type="submit">
                <h3>REGISTER</h3>
              </button>
            </form>
          </div>
          {/* <div className="copyright-section">Copyright @Manav-Kumar 2023</div> */}
        </div>
      </div>
    </div>
  );
}
/////////////////////////////////////////

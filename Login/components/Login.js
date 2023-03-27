import mainImg from "../assets/mainImg.png";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import Navbar from "../../components/Navbar/Navbar";



export default function Login() {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      navigate("/password");
    },
  });

  ////////////////////////////////////////////////////////////////////////

  return (
    
    <div className="main-container flex prevent-select ">
        <Navbar/>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="main-section flex">
          <div className="image-section">
            <img src={mainImg} alt="" />
          </div>
          <div className="form-section">
            <div className="main-form">
              <h2>Welcome Back!</h2>
              <h4>Please enter your details.</h4>
              <form
                onSubmit={formik.handleSubmit}
                className="input-form"
              >
                <input
                  {...formik.getFieldProps('username')}
                  type="text"
                  required
                  placeholder="Enter your Username"
                />

                {/* <span className="Forgot-password-section">
                <Link to="/recovery">Forgot Password?</Link>
              </span> */}
                <button className="submit-button" type="submit">
                  <h3>SUBMIT</h3>
                </button>
                <button className="Register-button ">
                  <Link className="not-member" to="/register">
                    <h3>SIGN-UP</h3>
                  </Link>
                </button>
              </form>
            </div>
            {/* <div className="copyright-section">Copyright @Manav-Kumar 2023</div> */}
          </div>
        </div>
      </div>
    
  );
}

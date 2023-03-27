import mainImg from "../assets/mainImg.png";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";
import { resetPassword } from "../helper/helper";
import { useAuthStore } from "../store/store";
import { useNavigate, Navigate } from "react-router-dom";
import useFetch from "../hooks/fetch.hook";
import "./styling.scss";

// import styles from "../styles/Username.module.css";

export default function Reset() {
  const { username } = useAuthStore((state) => state.auth);
  const navigate = useNavigate();
  const [{ isLoading, apiData, status, serverError }] =
    useFetch("createResetSession");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let resetPromise = resetPassword({ username, password: values.password });

      toast.promise(resetPromise, {
        loading: "Updating...",
        success: <b>Reset Successfully...!</b>,
        error: <b>Could not Reset!</b>,
      });

      resetPromise.then(function () {
        navigate("/password");
      });
    },
  });

  if (isLoading) return <h1 >isLoading</h1>;
  if (serverError)
    return <h1 >{serverError.message}</h1>;
  if (status && status !== 201)
    return <Navigate to={"/password"} replace={true}></Navigate>;

  return (
    <div className="main-container flex prevent-select ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="main-section flex">
        <div className="image-section">
          <img src={mainImg} alt="" />
        </div>
        <div className="form-section">
          <div className="main-form">
            <h2>No Worries !</h2>
            <h4>Enter new password to update.</h4>
            <form onSubmit={formik.handleSubmit} className="input-form">
              <input
                {...formik.getFieldProps("password")}
                type="text"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                type="text"
                placeholder="Confirm New Password"
              />

              <button className="submit-button" type="submit">
                <h3>RESET</h3>
              </button>
            </form>
          </div>
          {/* <div className="copyright-section">Copyright @Manav-Kumar 2023</div> */}
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////

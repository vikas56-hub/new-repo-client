import LawLady from "../assets/lawlady.jpg";
import React, { useState } from "react";
import { Link} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import useFetch from "../hooks/fetch.hook";
import { updateUser } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import "./styling.scss";


export default function Profile() {

  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
    
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: "Updating...",
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });
    },
  });



  // logout handler function
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

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
            <h2>Welcome onboard !</h2>
            <h4>Please enter your details.</h4>
            <form onSubmit={formik.handleSubmit} className="input-form">
              {/* //////////////////////////////////////////////////////////////// */}
              <input
                {...formik.getFieldProps("firstName")}
                type="text"
                placeholder="First Name"
                required
              />
              <input
                {...formik.getFieldProps("lastName")}
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                {...formik.getFieldProps("mobile")}
                type="text"
                placeholder="Mobile Number"
                required
              />
              <input
                {...formik.getFieldProps("email")}
                type="text"
                placeholder="Email"
                required
              />

              <input
                {...formik.getFieldProps("address")}
                type="text"
                placeholder="Address"
                required
              />
              {/* //////////////////////////////////////////////////////////////// */}

              <button className="submit-button" type="submit">
                <h3>SUBMIT</h3>
              </button>
            <button className="Register-button" onClick={userLogout}>
              <Link className="not-member" to="/register">
                <h3>LOGOUT</h3>
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

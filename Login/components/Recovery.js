import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthStore } from "../store/store";
import { generateOTP, verifyOTP } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import mainImg from "../assets/mainImg.png";
// import styles from "../styles/Username.module.css";

export default function Recovery() {
  const { username } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success("OTP has been send to your email!");
      return toast.error("Problem while generating OTP!");
    });
  }, [username]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201) {
        toast.success("Verify Successfully!");
        return navigate("/reset");
      }
    } catch (error) {
      return toast.error("Wront OTP! Check email again!");
    }
  }

  // handler of resend OTP
  function resendOTP() {
    let sentPromise = generateOTP(username);

    toast.promise(sentPromise, {
      loading: "Sending...",
      success: <b>OTP has been send to your email!</b>,
      error: <b>Could not Send it!</b>,
    });

    //console.log the otp
    // sentPromise.then((OTP) => {
    //   console.log(OTP);
    // });
  }
  return (
    <div className="main-container flex prevent-select ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="main-section flex">
        <div className="image-section">
          <img src={mainImg} alt="" />
        </div>
        <div className="form-section">
          <div className="main-form">
            <h2>No Worries</h2>
            <h4>Enter 6 digit OTP sent to your email address.</h4>
            <form onSubmit={onSubmit} className="input-form">
              <input
                onChange={(e) => setOTP(e.target.value)}
                type="text"
                placeholder="OTP"
                required
              />

              {/* <span className="Forgot-password-section">
                <Link to="/recovery">Forgot Password?</Link>
              </span> */}
              <button className="submit-button" type="submit">
                <h3>RECOVER</h3>
              </button>
            </form>
            <button className="Register-button " onClick={resendOTP}>
              <h3>Cant Get OTP ?</h3>
            </button>
          </div>
          {/* <div className="copyright-section">Copyright @Manav-Kumar 2023</div> */}
        </div>
      </div>
    </div>
  );
}
////////////////////////////////////////////////////////////////


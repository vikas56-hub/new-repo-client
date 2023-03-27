import React, { useState, useEffect } from "react";
import axios from "axios";

function OurCources() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/cources").then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleSubscribe = async (courseId) => {
    try {
      const response = await axios.post(`/api/courses/${courseId}/subscribe`);
      const sessionId = response.data.id;
      const stripe = await window.Stripe(process.env.STRIPE_PUBLIC_KEY);
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="OurCources-Section">
      <div className="OurCources-Main container">
        <div className="OurCources-text-area flex">
          <h1>Our Courses</h1>
        </div>
        <div className="OurCource-Cards">
          {courses.map((course) => (
            <div key={course._id} className="OC-Card">
              <div className="card-header">
                <img src={course.image} alt="" className="OC-img" />
              </div>
              <div className="OC-text">
                <h4>{course.title}</h4>
                <hr />
                <div className="OC-price">
                  <h6> ₹ {course.price} </h6>&nbsp;&nbsp;
                  {course.discountedPrice && (
                    <>
                      <del>₹ {course.originalPrice}</del>&nbsp;&nbsp;
                      <div className="deal">{course.discount}% OFF</div>
                    </>
                  )}
                </div>
                <button onClick={() => handleSubscribe(course._id)}>Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCources;

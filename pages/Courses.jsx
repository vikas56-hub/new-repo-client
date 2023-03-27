import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CourseCard(props) {
  const { course } = props;

  const handleSubscribeClick = async () => {
    const response = await axios.post(`/api/courses/${course._id}/subscribe`);
    const sessionId = response.data.sessionId;
    const stripe = await window.Stripe(process.env.STRIPE_PUBLIC_KEY);
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <img className="card-img-top" src={course.image} alt={course.title} />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <button className="btn btn-primary" onClick={handleSubscribeClick}>
          Subscribe
        </button>
        <Link to={`/courses/${course._id}`} className="btn btn-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    }
    fetchCourses();
  }, []);

  // Sort courses by update date, with most recent courses at the top
  courses.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="container">
      <h1>All Courses</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

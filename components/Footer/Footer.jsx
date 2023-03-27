import React from 'react';
import { Link } from 'react-router-dom';
import FooterImg from './FooterAssets/logo.png';
import {

  FaInstagram,
  FaLinkedin, FaYoutube,

} from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="Footer-section container ">
        <div className="Footer-Main  ">
          <div className="Footer-Website-Info">
            <span>Manav Kumar</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quidem sed repellat sunt saepe vero natus ut
              iure, aspernatur, ipsa veritatis iste ab a sapiente
              mollitia! Laborum neque tenetur maxime commodi,
              excepturi quis, consectetur architecto, labore quaerat
              eum blanditiis nihil voluptatibus debitis ad. Blanditiis
              minima porro, nisi voluptas modi atque.{' '}
            </p>
          </div>

          <div className="Footer-title">
            <h3>About</h3>
            <div className="Footer-links">
              <Link to="/">Podcast</Link>
              <Link to="/">Free Notes</Link>
              <Link to="/">Courses</Link>
              {/* <Link to="/">Link</Link>
              <Link to="/">Link</Link> */}
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////// */}
          <div className="Footer-title">
            <h3>Company</h3>
            <div className="Footer-links">
              <Link to="/">About Us</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Condition</Link>
              {/* <Link to="/">Link</Link>
              <Link to="/">Link</Link> */}
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////// */}
          {/* <div className="Footer-title">
            <h3>Any Questions ?</h3>
            <div className="Footer-links">
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
            </div>
          </div> */}
        </div>
        <hr />
        <div className="Footer-Info">
          <p>
            Copyright ©2023 All rights reserved | This Website is made
            by Manav Kumar
          </p>
          <div className="Social_links">
            <Link to="https://www.linkedin.com/company/fg-lawkit/">
              <FaLinkedin
                size={25}
                style={{ color: '#c0c0c0 ', marginRight: '1rem' }}
              />
            </Link>
            <Link to="https://www.youtube.com/@fglawkit/">
              <FaYoutube
                size={25}
                style={{ color: '#c0c0c0', marginRight: '1rem' }}
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram
                size={25}
                style={{ color: '#c0c0c0 ', marginRight: '1rem' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

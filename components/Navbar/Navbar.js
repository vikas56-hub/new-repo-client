// import React from 'react';

// import {Link} from 'react-router-dom'
// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import './Navbar.scss';
// // import FounderLogo from '../img/logo2.png';

// function Navbar() {
//   const [click, setclick] = useState(false);
//   const handleClick = () => setclick(!click);

//   return (
//     <nav className="Main_navigation-bar">
//       <div className="container main-nav flex">
//         <div className="company-logo">
//           <Link to="#" className="aCompany">
//             {/* <img src={FounderLogo} /> */}
//             <h2 className="Company-name">Manav Kumar</h2>
//           </Link>
//         </div>
//         <div className={click ? 'nav-links active' : 'nav-links'}>
//           <ul >
//             <li>
//               <Link to="#" className="hover-link">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="hover-link">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="hover-link">
//                 Notes
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="hover-link">
//                 Admin
//               </Link>
//             </li>
            
//             <li>
//               <Link to="/login" className="hover-link soild-button ">
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link to="/register" className="hover-link  border-button">
//                 Get Started
//               </Link>
//             </li>
//           </ul>
          
//         </div>
//         <Link
//           to="/"
//           className="nav-toggle "
//           onClick={handleClick}
//         >
//           {/* <i className="fa-solid fa-bars"></i> */}
//           {click ? <FaTimes /> : <FaBars />}
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';



///

import { useAuthStore } from '../../Login/store/store';
import { useNavigate } from 'react-router-dom';
//
// import FounderLogo from '../img/logo2.png';

function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  //
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const handleRoute = () => { 
    navigate('/about');
  }
  //

  return (
    <nav className="Main_navigation-bar">
      <div className="container main-nav flex">
        <div className="company-logo">
          <Link to="/" className="aCompany">
            {/* <img src={FounderLogo} /> */}
            <h2 className="Company-name">Manav Kumar</h2>
          </Link>
        </div>
        <div className={click ? 'nav-links active' : 'nav-links'}>
          <ul>
            <li>
              <Link to="/" className="hover-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover-link">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/podcast" className="hover-link">
                Podcasts
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={
            click ? 'nav-links-auth active' : 'nav-links-auth'
          }
        >
          {isLoggedIn() ? (
            <ul>
              <button
                className="hover-link border-button "
                onClick={handleRoute}
              >
                Dashboard
              </button>
              <button
                className="hover-link border-button "
                onClick={handleLogout}
              >
                Logout
              </button>
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  to="/login"
                  className="hover-link soild-button "
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover-link  border-button"
                >
                  Get Started
                </Link>
              </li>{' '}
            </ul>
          )}
        </div>
        <Link className="nav-toggle " onClick={handleClick}>
          {/* <i className="fa-solid fa-bars"></i> */}
          {click ? <FaTimes /> : <FaBars />}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

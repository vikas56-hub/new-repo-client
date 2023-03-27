import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./Login/components/styling.scss";
import "./Login/components/responsive.scss";
/** import all components */

import Login from "./Login/components/Login";
import Password from "./Login/components/Password";
import Register from "./Login/components/Register";
import Profile from "./Login/components/Profile";
import Recovery from "./Login/components/Recovery";
import Reset from "./Login/components/Reset";
import PageNotFound from "./Login/components/PageNotFound";

/**import homepages */
import Homepage from './pages/Homepage';
import About from './pages/About';
import Podcasts from './pages/Podcast';
import Course from './pages/Courses';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './Login/middleware/auth'
import { New } from './New';

/** root routes */
const router = createBrowserRouter([
  //Test Pages
  //////
  {
    path: '/new',
    element: <New />,
  },
  //////////
  //  Auth Pages
  ////////////////////////
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/password',
    element: (
      // <ProtectRoute>
      <Password />
    ),
    // </ProtectRoute>
  },
  {
    path: '/profile',
    element: (
      // <AuthorizeUser>
      <Profile />
    ),
    // /* </AuthorizeUser> */
  },
  {
    path: '/recovery',
    element: <Recovery />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
  ////////////////////////
  //Error Page
  {
    path: '*',
    element: <PageNotFound />,
  },

  ////////////////////////
  //Web Page
  {
    path: '/courses',
    element: <Course/>,
  },
  {
    path: '/podcasts',
    element: <Podcasts/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
]);

export default function App() {
  return (
    <main>
          <RouterProvider
              router={router}>
      </RouterProvider>
      
    </main>
  );
}

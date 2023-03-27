// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from './Login/store/store';

// import useFetch from './Login/hooks/fetch.hook';

// export function New() {
//   const navigate = useNavigate();
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
//   const logout = useAuthStore((state) => state.logout);

//     // const [{ UserType }] = useFetch(`/user/userType`);


//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <div>
//       {isLoggedIn() ? (
//         <>
//           <p>
//             Welcome back, {useAuthStore.getState().auth.username}!
//           </p>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <p>Please log in to view this content.</p>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from './Login/store/store';

import useFetch from './Login/hooks/fetch.hook';

export function New() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const [userType, setUserType] = useState('');

  const [{ apiData }] = useFetch('user/userType');

  useEffect(() => {
    if (apiData) {
      setUserType(apiData.userType);
    }
  }, [apiData]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn() && userType === 'Student' ? (
        <>
          <p>
            Welcome back, {useAuthStore.getState().auth.username}!
          </p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>
          You need to be logged in as a student to view this content.
        </p>
      )}
    </div>
  );
}

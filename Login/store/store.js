//old 1st time made
// import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//     auth : {
//         username : '',
//         active : false
//     },
//     setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
// }))
//////////////////////////////////////////////////
//current 3rd time made

// import create from 'zustand';

// export const useAuthStore = create((set) => ({
//   auth: {
//     username: '',
//     active: false,
//   },
//   setUsername: (name) =>
//     set((state) => ({
//       auth: { ...state.auth, username: name, active: true },
//     })),
//   logout: () =>
//     set((state) => ({
//       auth: { ...state.auth, username: '', active: false },
//     })),
//   isLoggedIn: () => Boolean(state.auth.username),
// }));

//////////////////////////////////////////////////
//old 2nd time made
// import create from 'zustand';

// const useAuthStore = create((set) => ({
//   auth: {
//     username: '',
//     active: false,
//   },
//   setUsername: (username) =>
//     set((state) => ({
//       auth: { ...state.auth, username },
//     })),
//   setActive: (active) =>
//     set((state) => ({
//       auth: { ...state.auth, active },
//     })),
//   isLoggedIn: () => {
//     return Boolean(set((state) => state.auth.username));
//   },
//   logout: () =>
//     set((state) => ({
//       auth: { ...state.auth, username: '', active: false },
//     })),
// }));

// export default useAuthStore;
//////////////////////////////////////
// import create from 'zustand';

// export const useAuthStore = create((set, get) => ({
//   auth: {
//     username: '',
//     active: false,
//   },
//   setUsername: (name) =>
//     set((state) => ({
//       auth: { ...state.auth, username: name, active: true },
//     })),
//   logout: () =>
//     set((state) => ({
//       auth: { ...state.auth, username: '', active: false },
//     })),
//   isLoggedIn: () => Boolean(get().auth.username),
// }));
///////////////
import create from 'zustand';

export const useAuthStore = create(
  (set, get) => ({
    auth: {
      username: localStorage.getItem('username') || '',
      active: Boolean(localStorage.getItem('active')),
    },
    setUsername: (name) => {
      localStorage.setItem('username', name);
      set((state) => ({
        auth: { ...state.auth, username: name, active: true },
      }));
    },
    logout: () => {
      localStorage.removeItem('username');
      localStorage.removeItem('active');
      set((state) => ({
        auth: { ...state.auth, username: '', active: false },
      }));
    },
    isLoggedIn: () => Boolean(get().auth.username),
  }),
  { name: 'auth' }
);
////
// import create from 'zustand';
// import axios from 'axios';

// export const useAuthStore = create(
//   (set, get) => ({
//     auth: {
//       username: localStorage.getItem('username') || '',
//       active: Boolean(localStorage.getItem('active')),
//       userType: '',
//     },
//     setUsername: (name) => {
//       localStorage.setItem('username', name);
//       set((state) => ({
//         auth: { ...state.auth, username: name, active: true },
//       }));
//     },
//     logout: () => {
//       localStorage.removeItem('username');
//       localStorage.removeItem('active');
//       set((state) => ({
//         auth: {
//           ...state.auth,
//           username: '',
//           active: false,
//           userType: '',
//         },
//       }));
//     },
//     isLoggedIn: () => Boolean(get().auth.username),
//     fetchUserType: async () => {
//       try {
//         const response = await axios.get('/api/userType');
//         set((state) => ({
//           auth: { ...state.auth, userType: response.data.userType },
//         }));
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   }),
//   { name: 'auth' }
// );

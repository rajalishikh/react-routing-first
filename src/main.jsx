import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './component/About/About';
import Contract from './component/Contract/Contract';
import Data from './component/Data_m/Data';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Post from './component/Post/Post';
import PostUnique from './component/PostUnique/PostUnique';
import UserDetails from './component/UserDetails/UserDetails';
import Users from './component/Users/Users';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    
    children:[
      {
        path:"/Data",
        element:<Data></Data>
      },
      {
        path:"/Contract",
        element:<Contract></Contract>
      },
      {
        path:"/About",
        element:<About></About>
      },
      {
        path:"/Users",
        loader:()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element:<Users></Users>
      },
      {
        path:"/user/:UserId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:"/Post",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Post></Post>
      },
      {
        path:"/PostDetails/:PostId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
        element:<PostUnique></PostUnique>
      }
      
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

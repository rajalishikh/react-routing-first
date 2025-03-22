import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './component/About/About';
import Contract from './component/Contract/Contract';
import Data from './component/Data_m/Data';
import Home from './component/Home/Home';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
      }
      
      
     
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

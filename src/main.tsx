import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Login } from './web_components/Login.tsx';
import { Register } from './web_components/Register.tsx';
import {createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom/dist';
import Home from './web_components/Home.tsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register/>,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
)

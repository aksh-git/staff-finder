import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './tailwind.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// pages 
import Root from './routes/root'
import ErrorPage from './pages/error-page'

import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Jobs from './pages/Jobs'
import Portfolio from './pages/Portfolio'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

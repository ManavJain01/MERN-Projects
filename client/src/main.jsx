import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// Importing Main Files
import MainPage from './Main File/components/Index'
import HomePage from './Main File/components/Main'

// My Projects Imports-----------------------------------------------------------
// Importing Users Info Files
import UsersInfo from './my-projects/Users Info/Users'
import CreateUser from './my-projects/Users Info/CreateUser'
import UpdateUser from './my-projects/Users Info/UpdateUser'

// Importing practice
import Practice from './my-projects/practice/practice'
import Testing from './my-projects/practice/testing'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children : [
      {
        path: "",
        element : <HomePage />
      },
      // /* Users Info */
      {
        path: "/UsersInfo",
        element : <UsersInfo />
      },
      {
        path: "/create",
        element : <CreateUser />
      },
      {
        path: "/update/:id",
        element : <UpdateUser />
      },
      // /* practice */
      {
        path: "/practice",
        element : <Practice />
      },
      {
        path: "/practice/testing",
        element : <Testing />
      },      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

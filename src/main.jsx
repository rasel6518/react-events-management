import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import EventDetails from './Components/EventDetails/EventDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/events.json')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <PrivateRoute><Services></Services></PrivateRoute>,

      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/eventdetails/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: () => fetch('/public/events.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

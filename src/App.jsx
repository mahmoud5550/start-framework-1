import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './componenets/Navbar/Navbar';
import Home from './componenets/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './componenets/Layout/Layout';
import About from './componenets/About/About';
import Portfolio from './componenets/Portfolio/Portfolio';
import Contact from './componenets/Contact/Contact';
import Error from './componenets/Error/Error';
export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [

        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },

        {
          path: '*', element: <Error />
        }
      ]
    },


  ])

  return (
    <>
      <RouterProvider router={routes} />

    </>
  )
}



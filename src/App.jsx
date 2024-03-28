import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';

import React from 'react'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>404</div>,
      children: [
        {
          path: "/user",
          element: <UserPage />,
          errorElement: <div>404</div>
        },
        {
          path: "/user/:id",
          element: <div>AQUÍ SE VE EL POST DEL USUARIO</div>,
          errorElement: <div>404</div>
        },
      ]
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App


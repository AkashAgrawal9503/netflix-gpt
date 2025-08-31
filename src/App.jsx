import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './componants/Login'
import Browse from './componants/Browse'

const App = () => {

  const appRounter = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ])

  return (
    <RouterProvider router={appRounter}/>
  )
}

export default App
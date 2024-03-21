import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import index from './index.css'
import EditDeck from './Pages/EditDeck'
import TestDeck from './Pages/TestDeck'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/edit',
    element: <EditDeck />,
  },
  {
    path: '/test',
    element: <TestDeck />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

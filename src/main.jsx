import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './Routes/MainLayout.jsx'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

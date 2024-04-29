import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux';
import  store  from './store/store.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Analytics from './pages/Dashboard/Analytics.jsx';
import Academy from './pages/Dashboard/Academy.jsx';
import CRM from './pages/Dashboard/CRM.jsx';
import Logistics from './pages/Dashboard/Logistics.jsx';
import Ecommerce from './pages/Dashboard/Ecommerce.jsx';
import Login from './pages/auth/Login.jsx'; 
import Register from './pages/auth/Register.jsx'; 
import AppRoutes from './AppRoutes.jsx';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='' element={<Analytics />} />
        <Route path='crm' element={<CRM />} />
        <Route path='ecommerce' element={<Ecommerce />} />
        <Route path='logistics' element={<Logistics />} />
        <Route path='academy' element={<Academy />} />

        <Route path='login' element={<Login />} />            
        <Route path='register' element={<Register />} />            
    </Route>
  )
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
  </React.StrictMode>,
)

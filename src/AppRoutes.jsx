import React, { lazy,useState,Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux';
import  store  from './store/store.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
 
const Analytics = lazy(() => import("./pages/Dashboard/Analytics"));
// import Analytics from './pages/Dashboard/Analytics.jsx';
const CRM = lazy(() => import("./pages/Dashboard/CRM"));
const Academy = lazy(() => import("./pages/Dashboard/Academy"));
const Logistics = lazy(() => import("./pages/Dashboard/Logistics"));
const Ecommerce = lazy(() => import("./pages/Dashboard/Ecommerce"));
  import Login from"./pages/auth/Login.jsx";
 import Register from "./pages/auth/Register";
 import ForgotPassWord from "./pages/auth/ForgotPassWord"; 
 
import { useDispatch, useSelector } from 'react-redux' 
import Loading  from './components/Loader/Loader.jsx';
function AppRoutes() { 
  const {auth} = useSelector(state => state.authReducer);  
     
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<App/>}>
             <Route path='' element={auth?<Analytics />:<Login/>} />
              <Route path='crm' element={<CRM />}/>
              <Route path='ecommerce' element={<Ecommerce />} />
              <Route path='logistics' element={<Logistics />} />
              <Route path='academy' element={<Academy />} />            
              <Route path='register' element={<Register />} />            
              <Route path='ForgotPassword' element={<ForgotPassWord />} />            
          </Route>
        )
      )
  return (
    <RouterProvider router={router}/> 
  )
}

export default AppRoutes

import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux';
import  store  from './store/store.js';  
import AppRoutes from './AppRoutes.jsx';


 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <AppRoutes/>
       
    </Provider>
  </React.StrictMode>,
)

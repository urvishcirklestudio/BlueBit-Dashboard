import React from 'react'
import './toster.scss'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Toster() { 
  return (  
        <ToastContainer autoClose={1200} className={'mainToster'}/> 
  )
}

export default Toster

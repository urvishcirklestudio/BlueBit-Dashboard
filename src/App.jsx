import { useEffect, useState } from 'react'
import { Suspense } from 'react';

import './App.scss' 
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer'
import { RiSettings3Fill } from "react-icons/ri";
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import SettingBar from './components/SettingBar/SettingBar'   
import Loader from './components/Loader/Loader'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Toster from './components/Toster/Toster'



function App() {   
  const navigate = useNavigate();
  const Location = useLocation();
  const settingReducer = useSelector(state => state.settingReducer);  
  const authReducer = useSelector(state => state.authReducer);  
  const loaderReducer = useSelector(state => state.loaderReducer);  
  const {MenuType,Content,ThemeMode,ThemeView} =settingReducer;  
  const {auth} =authReducer;   
  const dispatch = useDispatch() 
  const [showCanvas,setShowCanvas] = useState(false)  
  const [showNavMenu,setShowNavMenu] = useState(false)  
  const windowWidth= window.innerWidth;
  const handalNavMenu = () =>{
    if(windowWidth <= 1399){
      setShowNavMenu(!showNavMenu)
    }
  }
  if(showNavMenu){ 
    window.document.body.classList.add('overflow-hidden')
  } 
  else{
    window.document.body.classList.remove('overflow-hidden')
  }
  useEffect(()=>{   
    if(ThemeMode==='LightTheme'){
        window.document.body.classList.add('lightTheme');
        window.document.body.classList.remove('darkTheme');
    }else{
        window.document.body.classList.add('darkTheme');
        window.document.body.classList.remove('lightTheme');
    } 
    if(ThemeView === 'Borderd'){ 
        window.document.body.classList.add('border-theme')
    }
    else{
        window.document.body.classList.remove('border-theme') 
    } 
    if(ThemeView === 'SemiDark'){
        window.document.body.classList.add('semi-dark')
    }
    else{
        window.document.body.classList.remove('semi-dark')
    } 
 
},[settingReducer])

  return ( 
    <> 
    {
      !auth?
      <>
        <Layout/> 
      </>
      :
      <>
        <div className={`layout_page d-md-flex ${MenuType?"":"menu_collapsed"}`}> 
          <Sidebar showNavMenu={showNavMenu} handalNavMenu={handalNavMenu}/>
          <div className="wrapper">
            <div className={`${Content === 'Container'?"container":"container container-fluid"}`}>
              <Header handalNavMenu={handalNavMenu} />
              <Suspense fallback={<Loader/>}> 
                <Layout/>
              </Suspense>
              <Footer/>
              <button className='page_setting_btn btn ' onClick={()=>setShowCanvas(!showCanvas)}><RiSettings3Fill/></button>
            </div>
          </div>
        </div>

        <SettingBar showCanvas={showCanvas} setShowCanvas={setShowCanvas}/>
      </>
    }
    {
      loaderReducer.loader?<Loader/>:''
    }
    <Toster/>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import "./header.scss";
import { BsSearch } from "react-icons/bs";
import Searchmodal from './Searchmodal'; 
import { useDispatch, useSelector } from 'react-redux';

import LanguageDropDown from './partials/LanguageDropDown.jsx';
import ThimingDropDown from './partials/ThimingDropDown.jsx';
import UeserDropDown from './partials/UeserDropDown.jsx';
import { changeMenuType } from '../../slices/setting/settingSlices.js';

import { HiOutlineMenu } from "react-icons/hi";
function Header({handalNavMenu}) {
  const [showSearch, setShowSearch] = useState(false); 
  const dispatch=useDispatch(); 
   
  useEffect(() => {
    const handleKeyDown = (event) => { 
      if (event.ctrlKey && event.key === 'k') { 
        event.preventDefault(); 
        setShowSearch(true);  
      }
    };
 
    document.addEventListener('keydown', handleKeyDown);
 
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
    <div className="row">
      <header className='col-12'>
        <div className="header-wpr row align-items-center">
          <div className="col-7 col-sm-8 col-md-9 col-lg-5 ps-0 d-flex align-items-center">
            <div className="mon_menu_icon d-xxl-none me-2 me-sm-4" onClick={handalNavMenu}>
              <HiOutlineMenu/>
            </div>
            <div className="search_bar d-flex align-items-center" onClick={()=>setShowSearch(true)}>
              <div className="search-icon d-flex align-items-center justify-content-center"><BsSearch /></div>
              <p>Search (Ctrl+/)</p>
            </div>
          </div>
          <div className="col-5 col-sm-4 col-md-3 col-lg-7 pe-0 ">
            <div className="dropdown_wpr d-flex justify-content-end align-items-center">
              <LanguageDropDown/>
              <ThimingDropDown/>
              <UeserDropDown/>              
            </div>
          </div>
        </div>
      </header>
    </div>
      <Searchmodal showSearch={showSearch} setShowSearch={setShowSearch}/>
    </>
  )
}

export default Header

import React, { useContext, useEffect, useState } from "react";
import "./sidebar.scss";
import SidebarData from "./SidebarData";
import SubMenu from "./SabMenu";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { changeMenuType } from "../../slices/setting/settingSlices"; 
import { RiHome3Line,RiLayout2Line } from "react-icons/ri";  
import { CgClose } from "react-icons/cg";


function Sidebar({showNavMenu,handalNavMenu}) {
  const {MenuType} =useSelector(state=>state.settingReducer);  
  const dispatch=useDispatch() 
  
  const [activeKey, setActiveKey] = useState(null);
  const Location = useLocation();
  const locationName = Location.pathname.replace("/", "");   

  const toggleSlide = (index, e) => {
    if (activeKey === index) {
      return setActiveKey(null);
    }
    setActiveKey(index);
  };

  useEffect(() => {
    let submenuIndex = null;
    SidebarData.map((items, i) => {
      if (!items.childLinks) return;
      if (items.parentsLinks === locationName) {
        submenuIndex = null;
      } else {
        const ciIndex = items.childLinks.findIndex(
          (ci) => ci.routeLinks === locationName
        );
        if (ciIndex !== -1) {
          submenuIndex = i;
        } else {
          submenuIndex = 0;
        }
      }
    });
    setActiveKey(submenuIndex);
  }, [locationName]);

  return (
    <>
      <div className={`sidebar ${showNavMenu?'active':''}`}>
        <div className="logo">
          <Link to="/" onClick={handalNavMenu}>
            <div className="logo_icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.994 38.7373C22.9618 40.2423 18.5517 40.4065 14.4187 39.2055C10.2858 38.0044 6.65057 35.5021 4.05306 32.0704C1.45556 28.6387 0.0343675 24.4606 0.000615377 20.1568C-0.0331368 15.8531 1.32235 11.6532 3.86571 8.18117C6.40907 4.70914 10.0046 2.15019 14.1182 0.884447C18.2318 -0.381291 22.6439 -0.286282 26.6992 1.15536C30.7545 2.59701 34.2366 5.30837 36.6281 8.88667C39.0196 12.465 40.1931 16.7193 39.9741 21.0176L34.0487 20.7157C34.2027 17.6925 33.3774 14.7003 31.6953 12.1835C30.0132 9.66672 27.5641 7.7597 24.7119 6.74573C21.8596 5.73175 18.7563 5.66493 15.8631 6.55518C12.9698 7.44543 10.4409 9.24526 8.65204 11.6873C6.86318 14.1293 5.9098 17.0833 5.93354 20.1103C5.95728 23.1374 6.95687 26.076 8.78381 28.4897C10.6107 30.9033 13.1676 32.6633 16.0744 33.5081C18.9813 34.3528 22.0832 34.2373 24.9192 33.1787L26.994 38.7373Z" fill="#7367F0"/>
                <path d="M36.9387 32.1869C35.9806 33.6719 34 34.0992 32.5149 33.1411C31.0299 32.183 30.6026 30.2024 31.5607 28.7173C32.5188 27.2322 34.4994 26.805 35.9845 27.7631C37.4696 28.7212 37.8968 30.7018 36.9387 32.1869Z" fill="#7367F0"/>
              </svg>
            </div>
            <div className="logo_text">
              <svg width="153" height="39" viewBox="0 0 153 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 3.4C4.36667 3.13333 7.78333 3 10.75 3C18.9833 3 23.1 5.75 23.1 11.25C23.1 13.3167 22.5 15.1 21.3 16.6C20.1 18.0667 18.1833 19.0667 15.55 19.6C18.0833 19.9 20.0833 20.6667 21.55 21.9C23.0167 23.1333 23.75 25.2833 23.75 28.35C23.75 34.7833 19.6333 38 11.4 38H0.5V3.4ZM4.65 37.5H11.4C14.3667 37.5 16.4667 36.7333 17.7 35.2C18.9667 33.6333 19.6 31.25 19.6 28.05C19.6 24.85 18.9667 22.7167 17.7 21.65C16.4333 20.5833 14.55 20.0167 12.05 19.95H4.65V37.5ZM10.75 3.5C8.81667 3.5 6.78333 3.61666 4.65 3.85V19.45H12.05C16.75 19.25 19.1 16.55 19.1 11.35C19.1 8.81666 18.4 6.88333 17 5.55C15.6 4.18333 13.5167 3.5 10.75 3.5ZM35.8656 38C32.9323 38 31.0823 37.2333 30.3156 35.7C30.149 35.3667 30.0656 35.0667 30.0656 34.8V0.549999H33.5656V34.45C33.5656 35.4167 33.749 36.1667 34.1156 36.7C34.5156 37.2 34.9156 37.4667 35.3156 37.5L35.8656 37.6H37.4156V38H35.8656ZM46.6855 32.25C46.6855 34.8833 47.3855 36.5667 48.7855 37.3C49.4522 37.6333 50.3022 37.8 51.3355 37.8C53.4355 37.8 55.3022 37 56.9355 35.4C58.6022 33.8 59.5022 32.3167 59.6355 30.95V13H63.1355V34.45C63.1355 35.4167 63.3189 36.1667 63.6855 36.7C64.0855 37.2 64.4855 37.4667 64.8855 37.5L65.4355 37.6H66.9855V38H63.9355C62.5689 38 61.5189 37.7 60.7855 37.1C60.0855 36.5 59.7189 35.9 59.6855 35.3L59.6355 34.45V32.3C59.0355 33.7333 57.9689 35.0833 56.4355 36.35C54.9022 37.5833 53.2189 38.2 51.3855 38.2C49.5855 38.2 48.1022 38.0333 46.9355 37.7C45.8022 37.3333 44.9855 36.8333 44.4855 36.2C43.6189 35.1667 43.1855 33.8333 43.1855 32.2V13H46.6855V32.25ZM74.9039 25.8C74.9039 29.9333 75.6206 32.9667 77.0539 34.9C78.5206 36.8333 80.4372 37.8 82.8039 37.8C86.1372 37.8 89.1039 37.3 91.7039 36.3L91.8539 36.65C89.1872 37.6833 86.1706 38.2 82.8039 38.2C79.4706 38.2 76.7539 37.2 74.6539 35.2C72.5539 33.2 71.5039 30.1167 71.5039 25.95C71.5039 21.7833 72.6039 18.55 74.8039 16.25C77.0039 13.95 79.8039 12.8 83.2039 12.8C85.9372 12.8 88.2372 13.6167 90.1039 15.25C91.9706 16.8833 92.9039 19.3 92.9039 22.5C92.9039 22.6667 92.9039 22.8333 92.9039 23H75.0539C74.9539 23.9 74.9039 24.8333 74.9039 25.8ZM89.5039 22.6C89.4706 19.4 88.8539 17.0333 87.6539 15.5C86.4539 13.9667 84.9039 13.2 83.0039 13.2C81.1039 13.2 79.4039 14.0333 77.9039 15.7C76.4372 17.3667 75.5039 19.6667 75.1039 22.6H89.5039ZM106.491 15.15V14.1C104.991 14.7 103.625 15.9167 102.391 17.75C101.158 19.55 100.508 21.25 100.441 22.85V38H96.9414V13H100.441V20.95C100.975 19.0167 101.991 17.2 103.491 15.5C104.991 13.7667 106.691 12.8667 108.591 12.8H108.791C109.458 12.8 110.008 13.0333 110.441 13.5C110.908 13.9333 111.141 14.4833 111.141 15.15C111.141 15.8167 110.908 16.3667 110.441 16.8C110.008 17.2333 109.458 17.45 108.791 17.45C108.125 17.45 107.575 17.2333 107.141 16.8C106.708 16.3667 106.491 15.8167 106.491 15.15ZM122.01 38C120.643 38 119.593 37.7 118.86 37.1C118.16 36.5 117.793 35.9 117.76 35.3L117.71 34.45V13H121.21V34.45C121.21 35.4167 121.393 36.1667 121.76 36.7C122.16 37.2 122.543 37.4667 122.91 37.5L123.51 37.6H125.06V38H122.01ZM118.01 7.4C117.61 7 117.41 6.5 117.41 5.9C117.41 5.3 117.61 4.8 118.01 4.4C118.41 3.96666 118.91 3.75 119.51 3.75C120.11 3.75 120.61 3.96666 121.01 4.4C121.443 4.8 121.66 5.3 121.66 5.9C121.66 6.5 121.443 7 121.01 7.4C120.61 7.8 120.11 8 119.51 8C118.91 8 118.41 7.8 118.01 7.4ZM130.818 13.4V13H131.868V8H135.368V13H143.018V13.4H135.368V31.6C135.368 33.7667 135.602 35.3333 136.068 36.3C136.568 37.2667 137.585 37.75 139.118 37.75C140.685 37.75 142.268 37.4333 143.868 36.8L144.018 37.2C142.352 37.8333 140.435 38.15 138.268 38.15C136.135 38.15 134.535 37.7167 133.468 36.85C132.402 35.95 131.868 34.1833 131.868 31.55V13.4H130.818ZM150.768 38.2C150.334 38.2 149.951 38.05 149.618 37.75C149.318 37.4167 149.168 37.0333 149.168 36.6C149.168 36.1333 149.318 35.75 149.618 35.45C149.918 35.15 150.284 35 150.718 35C151.184 35 151.568 35.1667 151.868 35.5C152.201 35.8 152.368 36.1667 152.368 36.6C152.368 37.0333 152.201 37.4167 151.868 37.75C151.568 38.05 151.201 38.2 150.768 38.2Z" fill="currentColor"/>
              </svg> 
            </div> 
          </Link>
          <div className="collapsed_icon" onClick={()=>dispatch(changeMenuType(MenuType?false:true))}></div>
          <div className="close_icon d-xxl-none" onClick={handalNavMenu}><CgClose/></div>
        </div>
        <div className="tab_group">
          {SidebarData.map((items, i) => {
            if(items.childLinks && items.childLinks.length>0){
               return (
                <div className={`tab_items ${activeKey === i ? "show" : ""}`}
                key={i}> 
                <div className={`tab_heading d-flex align-items-center`} onClick={(e) => toggleSlide(i, e)}>
                  <div className="icon Left_icon">
                    <items.icon />
                  </div>
                  <p>{items.title}</p>
                  <div className="icon right_icon">
                    <RiArrowDownSLine />
                  </div> 
                </div>

                <div className="tab_body">
                  <SubMenu childLinks={items.childLinks?items.childLinks:[]} handalNavMenu={handalNavMenu}/>
                </div>
              </div>)
            }else{
                return (
                  <div className="main_link_wpr" key={i}>
                      {items.Heading?<div className="heading">{items.Heading}</div>:''} 
                    <NavLink to={items.mainRouteLinks} className="MainLinks" onClick={handalNavMenu}>
                      <div className="icon Left_icon"><items.icon /></div>
                      <p>{items.mainLinkName}</p>
                    </NavLink>
                  </div>
                )
            } 
          } 
         )}
        </div>
      </div>
      <div  className={`overlay ${showNavMenu?'active':''}`} onClick={handalNavMenu}></div>
    </>
  );
}

export default Sidebar;

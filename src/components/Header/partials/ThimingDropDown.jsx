import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { changeSettings } from '../../../slices/setting/settingSlices';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdLightMode,MdOutlineLightMode  } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
function ThimingDropDown() {
    const {ThemeMode} =useSelector(state=>state.settingReducer); 
    const dispatch=useDispatch();

    const ThemeTooltip = (props) => (
        <Tooltip id="button-tooltip" className='themeModeTooltip' {...props}>{ThemeMode==='LightTheme'?'LightTheme':'DarkTheme'}</Tooltip>
      );

  return (
    <Dropdown className='themeModeDrop themeDrop'>
        <OverlayTrigger placement="bottom" 
        overlay={ThemeTooltip}>
            <Dropdown.Toggle  id="ThemeMode">{ThemeMode==='LightTheme'?<MdOutlineLightMode />:<MdLightMode/>}</Dropdown.Toggle>
        </OverlayTrigger>

        <Dropdown.Menu>
            <Dropdown.Item className={`${ThemeMode==='LightTheme'?'active':''}`} onClick={()=>dispatch(changeSettings({name:'ThemeMode',value:'LightTheme'}))}>
            <div className="icon"><MdOutlineLightMode  /></div>
            <p>Light</p>
            </Dropdown.Item> 
            <Dropdown.Item className={`${ThemeMode==='DarkTheme'?'active':''}`} onClick={()=>dispatch(changeSettings({name:'ThemeMode',value:'DarkTheme'}))}>
            <div className="icon"><MdLightMode /></div>
            <p>Dark</p>
            </Dropdown.Item> 
        </Dropdown.Menu>
    </Dropdown>  
  )
}

export default ThimingDropDown

import React, { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { changeSettings, resetSettings } from '../../slices/setting/settingSlices';
import './settingbar.scss'
import { RiCloseFill,RiLoopLeftLine } from "react-icons/ri";  
import SettingsData from './SettingsData'; 

function SettingBar({showCanvas,setShowCanvas}) {  
   
const settings = useSelector(state=> state.settingReducer);   
// console.log(settings);
const dispatch = useDispatch() 
const settingsMapped = Object.entries(settings).map(([key, value]) => { 
    return { key, value };
});

const CheckdInput = (name,value)=>{
    const settingsitems =  settingsMapped.filter((items,i)=>items.key === name)
    if(settingsitems[0].value === value){ 
        return true
    }else{
        return false
    }   
} 
   
return (
    <Offcanvas className="setting_bar" show={showCanvas} onHide={()=>setShowCanvas(!showCanvas)} placement="end">
        <div className='offcanvas-header border-bottom'>
            <div className='offcanvas-title'>
                <h4 className='mb-2'>Template Customizer</h4>
                <p>Customize and preview in real time</p>
            </div>
            <div className="offcanvas-icons">
                <button className='btn reset-btn' onClick={()=>dispatch(resetSettings())}><RiLoopLeftLine /></button>
                <button className='btn close-btn' onClick={()=>setShowCanvas(!showCanvas)}><RiCloseFill /></button>
            </div>
        </div>
        <Offcanvas.Body>
          <form action='#' onSubmit={(e)=> e.preventDefault()} className="setting_form"> 

            {
                SettingsData.map((ele,i)=>(
                    <div key={i} className='settings_wpr'>
                        <div className="badge_heading mb-4" >
                            <span className='px-2 py-1 rounded-1'>{ele.badge}</span>
                        </div>
                        {
                            ele.setting.map((ele,i)=>(
                                <div className="opt_step" key={i}>
                                    <div className="opt_wpr" >
                                        <div className="opt_heading mb-3">
                                            <p>{ele.title}</p>
                                        </div>
                                        <ul className='opt_ul'>
                                            {
                                                ele.option.map((items,i)=>( 
                                                    <li className='opt_items' key={i}>
                                                        <label htmlFor={items.id}>
                                                            <input type="radio" name={items.name} id={items.id} value={items.value} onChange={(e)=>dispatch(changeSettings({name:e.target.name,value:e.target.value}))} 
                                                            checked={CheckdInput(items.name,items.value)} 
                                                            />
                                                            <div className="box fs-4 overflow-hidden">
                                                                {
                                                                    items.icon?<items.icon/>:<img src={items.image} alt=""/>
                                                                }
                                                            </div>
                                                            <p className='mt-1 small'>{items.labelText}</p>
                                                        </label>
                                                    </li> 
                                                ))
                                            }                                         
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
          </form>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SettingBar

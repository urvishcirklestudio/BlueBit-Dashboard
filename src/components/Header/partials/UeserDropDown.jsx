import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { RiQuestionLine,RiShutDownLine } from "react-icons/ri";
import { TbCurrencyDollar } from "react-icons/tb"; 
import UserImage from '../../../assets/images/UserImage.png';
import { useDispatch, useSelector } from 'react-redux'
import { handleAuth } from '../../../slices/auth/authSlices';
import { useNavigate } from "react-router-dom";


function UeserDropDown() {
    const {RegisterUser} = useSelector(state => state.authReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Logout= ()=>{
        dispatch(handleAuth(false))
        navigate('/')
    }
 
  return (
    <Dropdown className='userDropDown'>
        <Dropdown.Toggle  id="userDrop">
            <img src={UserImage} alt="user Image"/>
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
            <div className="userLinks userdetails">
                <Dropdown.Item className='d-flex align-items-center'>
                    <div className="userImage">
                        <img src={UserImage} alt="user Image"/> 
                    </div>
                    <div className="userName">
                        <h4 className='fw-bold'>{`${RegisterUser.UserName.slice(0, 12)}${RegisterUser.UserName.length > 12?'...':''}`}</h4>
                        <p className='mt-1 fs-5 lh-1'>Admin</p>
                    </div>
                </Dropdown.Item> 
            </div>

            <div className="userLinks">
                <Dropdown.Item className='linksGrp d-flex align-items-center'>
                    <div className="icon"><FaRegUser /></div>
                    <p>My Profile</p>
                </Dropdown.Item> 
                <Dropdown.Item className='linksGrp d-flex align-items-center'>
                    <div className="icon"><IoSettingsOutline /></div>
                    <p>Settings</p>
                </Dropdown.Item> 
                <Dropdown.Item className='linksGrp d-flex align-items-center'>
                    <div className="icon"><HiOutlineCreditCard /></div>
                    <p>Billing <span className="badge">3</span></p>
                </Dropdown.Item> 
            </div>

            <div className="userLinks">
                <Dropdown.Item className='linksGrp d-flex align-items-center'>
                    <div className="icon"><RiQuestionLine /></div>
                    <p>FAQ</p>
                </Dropdown.Item> 
                <Dropdown.Item className='linksGrp d-flex align-items-center'>
                    <div className="icon"><TbCurrencyDollar /></div>
                    <p>Pricing</p>
                </Dropdown.Item>   
            </div>

            <div className="userLinks">
                <Dropdown.Item className='linksGrp d-flex align-items-center' onClick={()=>Logout()}>
                    <div className="icon"><RiShutDownLine /></div>
                    <p>Log Out</p>
                </Dropdown.Item>  
            </div>
        </Dropdown.Menu>
    </Dropdown>  
  )
}

export default UeserDropDown

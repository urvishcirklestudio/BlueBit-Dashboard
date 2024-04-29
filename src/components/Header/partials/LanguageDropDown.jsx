import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { HiMiniLanguage } from "react-icons/hi2";

function LanguageDropDown() {
  return (
    <Dropdown className='language_drop themeDrop'>
        <Dropdown.Toggle  id="languageDropDown">
        <HiMiniLanguage />
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>English</Dropdown.Item>
        <Dropdown.Item>French</Dropdown.Item>
        <Dropdown.Item>Arbic</Dropdown.Item>
        <Dropdown.Item>German</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown> 
  )
}

export default LanguageDropDown

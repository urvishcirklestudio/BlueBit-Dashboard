import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import { RiHome3Line } from "react-icons/ri"; 
import { Link, NavLink } from "react-router-dom";
function TabItems() {
  return (
    <div className="tab_items">
        <AccordionButton eventKey="0"><RiHome3Line /> Dashboard </AccordionButton>
        <Accordion.Collapse className="tab_body" eventKey="0">
            <>
            <div className="tab_links">Hello! I'm the body </div>
            <div className="tab_links">Hello! I'm the body </div>
            </>
        </Accordion.Collapse>
    </div> 
  )
}

export default TabItems

import React from 'react'
import { RiCircleLine } from "react-icons/ri";

import { Link, NavLink } from "react-router-dom";


function SabMenu({childLinks,handalNavMenu}) { 
  return (
    childLinks.map((item,i)=>
      <NavLink to={item.routeLinks} className="tab_links" key={i} onClick={handalNavMenu}>
        <div className="icon Left_icon"><RiCircleLine /></div>
        <p>{item.LinkName}</p>
        </NavLink>
    )
  )
}

export default SabMenu

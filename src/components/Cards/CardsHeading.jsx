import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiDotsVerticalRounded } from "react-icons/bi";
function CardsHeading({ children, className, ...props }) {
  return (
    <div className={`card-heading ${className}`} {...props}>
      <div className="heading-wpr">
      {children}

      </div>
      <div className="ActionDropDown">
        <Dropdown align="end">
          <Dropdown.Toggle variant="" id="cardDropDown">
          <BiDotsVerticalRounded />
          
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/viewMore">View More</Dropdown.Item>
            <Dropdown.Item href="#/delete">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default CardsHeading;

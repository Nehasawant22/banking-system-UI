import React from 'react';

import {  Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navElements";

const CustomerMenu= () =>{
  return (
    <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/employeedetails" >
                    Save Employee Details
                    </NavLink>
                    <NavLink to="/employeeaccountdetails" activeStyle>
                    Employee AccountDetails
                    </NavLink>
                    <NavLink to="/deletcustomer" activeStyle>
                    Delete Customer
                    </NavLink>
                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
  

export default CustomerMenu;
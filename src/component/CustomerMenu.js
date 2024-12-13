import React from 'react';
import { Link } from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavDropDownBtn,
} from "./navElements";
import { NavDropdown } from 'react-bootstrap';

const CustomerMenu = () => {
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
                    <NavLink>
                        <NavDropDownBtn title="Services" id="basic-nav-dropdown">
                            <NavDropDownBtn.Item as={Link} to="/accountdetails">Know Current Balance</NavDropDownBtn.Item>
                            <NavDropDownBtn.Item as={Link} to="/creditamount">
                                Credit Amount
                            </NavDropDownBtn.Item>
                            <NavDropDownBtn.Item as={Link} to="/debitamount">
                                Debit Amount
                            </NavDropDownBtn.Item>
                        </NavDropDownBtn>
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
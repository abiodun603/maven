import React from 'react'
import { Header, Nav, NavLink, NavList, NavMenu } from './StyledNavbar'
import Logo from "../../assets/images/home/logo.svg"
import { Button } from '..'

const Navbar = () => {
    return (
        <>
        <Header>
            <Nav>
                <NavLink to = "/logo">
                    <img src={Logo} alt="" />
                </NavLink>

                <NavMenu>
                    <NavList>
                        <NavLink to = "/" activeStyles>
                            Home
                        </NavLink>
                        <NavLink to = "/case">
                            Use case
                        </NavLink>
                        <NavLink to = "/service">
                            Services
                        </NavLink>
                        <NavLink to = "/product">
                            Product
                        </NavLink>
                        <NavLink to = "/train">
                            Training
                        </NavLink>
                        <NavLink to = "/career">
                            Career
                        </NavLink>
                        <NavLink to = "/about">
                            About us
                        </NavLink>
                        <NavLink to = "/contact">
                            Contact
                        </NavLink>
                    </NavList>
                </NavMenu>
            </Nav>
        </Header>
            
        </>
    )
}

export default Navbar

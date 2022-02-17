import React from 'react'
import { Header, Nav, NavLink, NavList, NavMenu } from './StyledNavbar'
import Logo from "../../assets/images/home/logo.svg"
import { Button } from '..'

const Navbar = () => {
    return (
        <>
        <Header>
            <Nav>
                <NavLink to = "/">
                    <img src={Logo} alt="" />
                </NavLink>

                <NavMenu>
                    <NavList>
                        <NavLink to = "/" activeStyles>
                            Home
                        </NavLink>
                        <NavLink to = "/about">
                            Use case
                        </NavLink>
                        <NavLink to = "/solution">
                            Services
                        </NavLink>
                        <NavLink to = "/event">
                            Product
                        </NavLink>
                        <NavLink to = "/contact">
                            Training
                        </NavLink>
                        <NavLink to = "/contact">
                            Career
                        </NavLink>
                        <NavLink to = "/contact">
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

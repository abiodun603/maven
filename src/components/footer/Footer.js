import React from 'react'
import { Divider, FooterContainer, FooterWrapper, Header, Nav, NavLink, NavList, NavMenu, NavSocialIcon, NavSocialLinks } from './StyledFooter'
import Logo from "../../assets/images/home/logo.svg"
import { COLORS } from '../../assets/theme/theme'
import {FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <>
        <FooterWrapper>
            <FooterContainer>
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
                        
                        <NavSocialLinks>
                            <NavSocialIcon>
                                <FaInstagram/>
                            </NavSocialIcon>
                            <NavSocialIcon>
                                <FaTwitter/>
                            </NavSocialIcon>
                            <NavSocialIcon>
                                <FaLinkedinIn/>
                            </NavSocialIcon>
                        </NavSocialLinks>


                    </Nav>
                    <div className="dividerContainer">
                        <Divider/>
                    </div>
                    <p>&copy; 2021 Mavencode. All Rights Reserved</p>
                </Header>

            </FooterContainer>
        </FooterWrapper>
         
    </>
  )
}

export default Footer
import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"
import { COLORS, FONTS } from "../../assets/theme/theme";

export const FooterWrapper = styled.div   `
    background: rgba(0, 84, 169, 0.08);
`

export const FooterContainer = styled.div `
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Header = styled.div `
    width: 100%;

    .dividerContainer {
        padding: 0.5rem calc((100vw - 1260px) /2);
        margin-top: 3rem;
    }

    p{
        text-align: center;
        ${FONTS.h3};
        color: ${COLORS.primary} !important;
        margin-top: 2rem;
    }
`

export const Nav = styled.nav `
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1300px) /2);
    z-index: 10;
`

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavList = styled.div `
    display: flex;
    align-items: center;
`

export const NavLink = styled(Link)`
    color: ${COLORS.black};
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    height: 100%;
    cursor: pointer;
    ${FONTS.h5};

    &.active {
        color: ${COLORS.primary};
    }

    img{
        width: 100%;
        height: auto;
    }
`

export const NavSocialLinks = styled.div `
    display: flex;

`

export const NavSocialIcon = styled.div `
    background: ${COLORS.primary};
    height: 28px;
    width: 28px;
    border-radius: 50%;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export const Divider = styled.hr `
    height: 0.5px;
    border: none;
    background-color:  ${COLORS.primary};
`
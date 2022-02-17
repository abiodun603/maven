import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"
import { COLORS, FONTS } from "../../assets/theme/theme";

export const Header = styled.div `
    position: fixed;
    width: 100%;
    z-index: 999;
`

export const Nav = styled.nav `
    background: #FAFAFA;
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
    position: relative;
    color: ${COLORS.black};
    display: flex;
    align-items: center;
    margin: 0 1.2rem;
    height: 100%;
    cursor: pointer;
    ${FONTS.h5};

    &.active {
        color: ${COLORS.primary};

        &:after{
            position: absolute;
            content: " ";
            height:2px;
            bottom: -4px;
            width: 100%;
            background: #00CCFF;
        }
    }

    img{
        width: 100%;
        height: auto;
    }
`




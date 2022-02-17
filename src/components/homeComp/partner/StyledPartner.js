import styled from "styled-components"
import { COLORS, FONTS, SIZES } from "../../../assets/theme/theme";
import {NavLink as Link} from "react-router-dom"

/* Partner Business */
export const PartnerWrapper = styled.div `
    background: #FFFFFF;
`

export const PartnerContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    row-gap: 0;
    column-gap: 5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    column-grap: 2rem;
    h2{
        ${FONTS.h2};
        margin-bottom: 1rem;
    }
    p{
        text-align: center;
        ${FONTS.h4};
        margin-bottom: 1rem;
    }
`




export const PartnersIcon = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem;
    /* object-fit: contain; */
`

export const PatnersIconContainer = styled.img `
     /* width: 100%; */
    height: auto; 
    image-rendering : pixelated;
    -ms-interpolation-mode: nearest-neighbor;
    margin-right: 4rem;

    &:nth-child(5){
        margin-right: unset !important;
    }
`
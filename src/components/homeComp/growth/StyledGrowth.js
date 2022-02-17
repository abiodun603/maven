import styled from "styled-components"
import { COLORS, FONTS, SIZES } from "../../../assets/theme/theme";
import {NavLink as Link} from "react-router-dom"

/* Growth Business */
export const GrowthWrapper = styled.div `
    background: #FAFAFA;
`

export const GrowthContainer = styled.div `
    padding: 0.5rem 3rem 0 calc((100vw - 1200px) /2);
    height: 100vh;
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    row-gap: 0;
    column-gap: 5rem;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    column-grap: 2rem;
    h2{
        ${FONTS.h2};
        margin-bottom: 1rem;
    }
    p{
        ${FONTS.h4};
        margin-bottom: 1.2rem;
    }
`

export const GrowthIcon = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const GrowthIconContainer = styled.div `
    padding:1.5rem 1.5rem 1.5rem 0;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    object-fit: contain;
    position: relative;
    flex-wrap: wrap;
    width: 180px;
    img{
        /* width: 100%; */
        height: auto; 
        /* object-fit: contain; */

    }
`
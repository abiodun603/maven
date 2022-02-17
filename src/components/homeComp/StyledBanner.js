import styled from "styled-components"
import { COLORS, FONTS, SIZES } from "../../assets/theme/theme";
import {NavLink as Link} from "react-router-dom"

export const BannerWrapper = styled.div `
    width: 100%;
    height: 100vh;
    background: #F3F3F4;
`

export const BannerContainer = styled.div `
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr;
    row-gap: 0;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    column-gap: 8rem;
`
export const BannerColumnOne = styled.div `
    position: relative;
    margin-bottom: -3rem;
    justify-content: center;
    h3{
        ${FONTS.h1}
    }

    span{
        color: ${COLORS.gray};
        ${FONTS.h4}
    }
`

export const BannerDescription = styled.div `
    display: flex;
    align-items: center;
    margin: 1rem 0 1rem 0;
    p{
        ${FONTS.h4};
        color: ${COLORS.gray};
    }
`

export const Avatar = styled.div `
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: .5rem;

    img{
        width: 100%;
        height:100%;
        object-fit: cover;
    }
`

export const BannerAction = styled.div `
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
`

export const BannerLearn = styled.div `
    display: flex;
    align-items: center;
    margin-left: -1rem;

    img{
        width: 130px;
        margin-top:1.3rem;

        &:hover{
            transform: scale(1.01);
        }
    }

    p{
        margin-left: .2rem;
        color: ${COLORS.gray};
        font-size: ${FONTS.h4};
    }

    
`

export const BannerColumnTwo = styled.div `
    position: relative;
    padding-top: 1.5rem;
    width: 400px;
    height: 100vh;
    margin-bottom: -5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 430px;
        margin-top: -6rem;
    }
`

export const BannerCaption = styled.img `
    width: 400px;
    height: 100%;
    object-fit: contain;
`
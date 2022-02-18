import styled from "styled-components"
import { COLORS, FONTS } from "../../assets/theme/theme";
import img from "../../assets/images/contact/background.svg"

export const HeaderWrapper = styled.div `
    position: relative;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    height: 434px;
`

export const HeaderContainer = styled.div `
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr;
    row-gap: 0;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    column-gap: 8rem;
    padding-top: 4rem;
`
export const HeaderColumnOne = styled.div `
    position: relative;
    justify-content: center;
    h3{
        ${FONTS.h2};
        color: ${COLORS.white};
        margin-bottom: .8rem;
    }

`

export const HeaderDescription = styled.div `
    p{
        ${FONTS.h5};
        color: ${COLORS.white};
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

export const HeaderAction = styled.div `
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
`

export const HeaderLearn = styled.div `
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

export const HeaderColumnTwo = styled.div `
    position: relative;
    padding-top: 1.5rem;
    width: 400px;
    /* height: 100vh; */
    margin-bottom: -5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 430px;
        margin-top: -6rem;
    }
`

export const HeaderCaption = styled.img `
    width: 400px;
    height: 100%;
    object-fit: contain;
`

import styled from "styled-components"
import { COLORS, FONTS, SIZES } from "../../assets/theme/theme";
import img from "../../assets/images/contact/background.svg"
import {NavLink as Link} from "react-router-dom"

export const ContactWrapper = styled.div `
    position: relative;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    height: 434px;
`

export const ContactContainer = styled.div `
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
export const ContactColumnOne = styled.div `
    position: relative;
    justify-content: center;
    h3{
        ${FONTS.h2};
        color: ${COLORS.white};
        margin-bottom: .8rem;
    }

`

export const ContactDescription = styled.div `
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

export const ContactAction = styled.div `
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
`

export const ContactLearn = styled.div `
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

export const ContactColumnTwo = styled.div `
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

export const ContactCaption = styled.img `
    width: 400px;
    height: 100%;
    object-fit: contain;
`

// Contact Form
export const ContactFormContainer = styled.div `
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContactFormWrapper = styled.div `
    position: relative;
    height: 78%;
    width: 60%;
    display: flex;
    background: ${COLORS.lightGray1};
`

export const ContactBannerWrapper = styled.div `
    
    h3{
        ${FONTS.body1};
        color: white;
        margin-bottom: 3rem;
    }

    .directions{
        display: flex;
        flex-direction: column;
        p{
            color: ${COLORS.white};
            ${FONTS.body4};
            margin-bottom: .5rem;
        }
    }

    .contacts{
        display: flex;
        align-items: center;
        color: ${COLORS.white};
        margin-bottom: .5rem;

        p{
            color: ${COLORS.white};
            ${FONTS.body4};
            margin-left: .5rem;
        }
    }
`

export const ContactBanner = styled.div `
    flex:1;
    padding: 3rem  0 1rem 2rem;
    height: 100%; 
    background-color: ${COLORS.primary};

    .city{
        margin-bottom: 2rem;
        h4{
            ${FONTS.h4};
            color: ${COLORS.secondary};
        }
        p{
            ${FONTS.body4};
            color: ${COLORS.white};
            font-weight: 400;
        }
    }
`
export const ContactSocialLinks = styled.div `
    display: flex;
    justify-content: center;
`

export const ContactSocialIcon = styled.div `
    background: ${COLORS.white};
    height: 28px;
    width: 28px;
    border-radius: 50%;
    margin-right: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.primary};
`


export const FormWrapper = styled.form `
    flex:1.5
`

export const ContactForm = styled.div `
    padding: 2.2rem  3rem 1rem 2rem;
    h2{
        text-align: left !important;
        ${FONTS.body1};
        margin-bottom: 1rem;
        color: ${COLORS.lightGray2}
    }
    p{
        ${FONTS.h5};
        color: ${COLORS.lightGray3};
        margin-bottom: 1.5rem;
    }
`

export const FromBx = styled.div `
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

`
export const Input = styled.input.attrs(props => ({
    type: 'text',

})) `
    width: 100%;
    padding: 10px 0px;
    background: var(--kLightGrey);
    border: 2px solid #D0D0D0;
    outline: none;
    font-weight: 400;
    letter-spacing: 1px;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
`

export const InputEmail = styled.input.attrs(props => ({
    type: 'email',

})) `
    width: 100%;
    padding: 10px 0px;
    background: var(--kLightGrey);
    border: 2px solid #D0D0D0;
    outline: none;
    font-weight: 400;
    letter-spacing: 1px;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
`

export const Button = styled.button `
    width: 100%;
    border: none;
    padding: 15px 20px;
    color: ${COLORS.white};
    ${FONTS.body2};
    cursor: pointer;
    border-radius: 10px; 
    background: ${COLORS.primary};
    letter-spacing: 1px;
    font-weight: normal;
    margin-top: 3rem;
`
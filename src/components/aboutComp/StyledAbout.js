import styled from "styled-components"
import { COLORS, FONTS } from "../../assets/theme/theme"

export const AboutContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({imageStart}) => (imageStart ? "row-reverse" : "row")};
    width: 100%;
    padding: 60px 200px;

`

export  const AboutTitleContainer = styled.div `
    flex: 1;
    display:flex;
    flex-wrap: wrap;

`
export const AboutImageContainer = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;


`
export const AboutTitle = styled.p`
    ${FONTS.body1};
    color: ${COLORS.primary};
    margin-bottom: .8rem;
    font-weight: 500;
`
export const AboutDescription = styled.p`
    /* color: var(--black); */
    ${FONTS.h4};
    font-weight: 300;
    text-align: justify;
`
export const AboutImage = styled.img `
    width: 330px;
    height: auto;
    transform: translateZ(0);
    --webkit-transform: translateZ(0);
    --webkit-filter: blur(0);
    filter: blur(0);
`
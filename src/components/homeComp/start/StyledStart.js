import styled from "styled-components"
import { COLORS, FONTS, SIZES } from "../../../assets/theme/theme";

/* Partner Business */
export const StartWrapper = styled.div `
    background: #FFFFFF;
`

export const StartContainer = styled.div `
    height: 350px;
    width: 100%;
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        text-align: center;
        ${FONTS.h4};
        margin-bottom: 1rem;
    }
`

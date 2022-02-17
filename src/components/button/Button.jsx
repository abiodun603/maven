import React from 'react'
import "./Button.css"

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline",
    "btn--orange--solid",
    "btn--orange--outline",
    "btn--orange--primary"
];

const SIZES = ["btn--medium", "btn--small"];


function Button({children, type, onClick, buttonStyle, buttonSize}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button onclick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`} >
            {children}
        </button>
    )
}

export default Button

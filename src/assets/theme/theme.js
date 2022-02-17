export const COLORS = {
    primary: "#0054A9",     // Light purple
    secondary: "#00CCFF",   // Dark purple
    transparent: "transparent",
    white: "#ffffff",
    black: "#151515",
    blue: "#09185E",
    gray: "#787878",
    lightRed: "#EE174B",
    lightGray: "#505050",
    lightGray1: "#F9F9F9",
    lightGray2: "#888D8F",
    lightGray3: "#787878"

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: "54px",
    h2: "36px",
    h3: "18px",
    h4: "21px",
    h5: "16px",
    body1: "24px",
    body2: "22px",
    body3: "16px",
    body4: "14px",
    body5: "12px"

};
export const FONTS = {
    h1: {'font-size': SIZES.h1, "linr-height": "31.6px", color: COLORS.primary},
    h2: {'font-size': SIZES.h2, "line-height": "48.31px", color: COLORS.primary },
    h3: {"font-size": SIZES.h3, "line-height": "18px", color: COLORS.gray },
    h4: { "font-size": SIZES.h4, "font-weight": "300", "line-height": "31.6px", color: COLORS.gray },
    h5: {'font-size': SIZES.h5, 'line-height': "24px", color: COLORS.gray, "font-weight" : "400"},
    body1: {'font-size': SIZES.body1, 'line-height': "24px"},
    body2: {'font-size': SIZES.body2, 'line-height': "30px" },
    body3: {fontSize: SIZES.body3, lineHeight: "22px" },
    body4: {'font-size': SIZES.body4, 'line-height': "22px" },
    body5: {fontSize: SIZES.body5, lineHeight: "22px" }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

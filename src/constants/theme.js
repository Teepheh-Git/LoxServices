import {Dimensions} from "react-native";

const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;

export const COLORS = {
    white: "#ffffff",
    red: "#FC0000",
    colonRed: "#E2574C",
    buttonRed: "#F93C26",
    green: "#27AC60",
    blue: "#2C9AFF",
    indicatorBlue: "#6375A4",
    black: "#000000",
    textBlack: "#1C1C1C",
    gray: "#A1ABB2",
    gray2: "rgba(210,210,210,0.18)",
    gray3: "#999999",
    gray4: "#737373",
    gray5: "#F2F2F2",
    lightGray: "#C4C4C4",

};
export const SIZES = {
    // global sizes
    font: 14,
    radius: 5,
    borderWidth: 1,
    padding: 12,
    buttonHeight: H * 0.05,
    buttonWidth: W * 0.85,

    // fonts sizes
    sliderText: 40,
    header: 20,
    header2: 24,
    buttonText: 14,
    buttonText2: 16,
    priceText: 30,
    body: 14,
    body2: 22,
    inputTitle: 9,
    top: 5,
    bottom: 20,
    left: 20,
    right: 20,

    // app dimensions
    W, H
};


export const FONTS = {
    header: {fontSize: SIZES.header},
    buttonFont2: {fontSize: SIZES.buttonText2, lineHeight: 18.75},
    textInputFont: {fontSize: SIZES.body, lineHeight: 16.41},
    textButtonFont: {fontSize: SIZES.buttonText, lineHeight: 16.41},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

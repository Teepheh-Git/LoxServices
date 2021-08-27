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
    top:5,
    bottom:20,
    left:20,
    right:20,

    // app dimensions
    W, H
};


export const FONTS = {
    header: {fontFamily: "Roboto-Black", fontSize: SIZES.header},
    buttonFont2: {fontFamily: "Roboto-Black", fontSize: SIZES.buttonText2, lineHeight: 18.75},
    textInputFont: {fontFamily: "Roboto-Black", fontSize: SIZES.body, lineHeight: 16.41},
    textButtonFont: {fontFamily: "Roboto-Black", fontSize: SIZES.buttonText, lineHeight: 16.41},
    h2: {fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22},
    h5: {fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22},
    body1: {fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

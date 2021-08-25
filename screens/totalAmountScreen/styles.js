import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        height: SIZES.H,
        width: SIZES.W,
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        flexDirection: 'row'
        , height: SIZES.H * 0.09,
        width: SIZES.W * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.red,
        bottom: 70
    },
    text: {
        fontSize: SIZES.priceText,
        color: COLORS.white,
    },
    closeButton: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        backgroundColor: COLORS.black,
        marginVertical: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: SIZES.bottom,
        top: 30
    },
})

export default styles

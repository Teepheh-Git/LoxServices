import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONTS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        height: SIZES.H,
        width: SIZES.W,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orText: {
        color: COLORS.gray,
        fontWeight: '700',
        marginVertical: SIZES.padding,
    },
    loginButton: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        backgroundColor: COLORS.red,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        top: SIZES.top,
    },
    signUpButton: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        backgroundColor: COLORS.black,
        marginVertical: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: SIZES.bottom,
    }

})

export default styles;

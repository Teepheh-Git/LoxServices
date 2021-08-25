import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SIZES.W,
        height: SIZES.H * 0.9,
        justifyContent: 'center'
    },
    root: {
        width: SIZES.W,
        height: SIZES.H * 0.5,
        marginVertical: 3
    },
    signUpButton: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        backgroundColor: COLORS.black,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        top: SIZES.top,
    },
    loginButton: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: SIZES.top,
    }

})

export default styles

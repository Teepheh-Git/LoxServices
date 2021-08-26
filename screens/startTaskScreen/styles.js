import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: SIZES.H,
        width: SIZES.W,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    root: {
        width: SIZES.W * 0.90,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 150

    },
    text: {
        top: 40,
        fontSize: SIZES.body2,
        fontWeight: '700'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SIZES.W * 0.9,
    },
    noButton: {
        height: SIZES.buttonHeight,
        width: '45%',
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: SIZES.bottom,
    },
    yesButton: {
        height: SIZES.buttonHeight,
        width: '45%',
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: SIZES.bottom,
    }


})

export default styles

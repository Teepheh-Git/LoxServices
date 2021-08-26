import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONTS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: SIZES.H,
        width: SIZES.W,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetButton: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

})

export default styles;

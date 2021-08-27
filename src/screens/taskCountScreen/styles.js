import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({

    container: {
        height: SIZES.H,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLORS.white

    },
    timerContainer: {
        justifyContent: 'center',

    },

    amount: {
        flexDirection: 'row',
        height: SIZES.H * 0.06,
        width: SIZES.W * 0.7,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        bottom: 100
    },
    text: {
        fontSize: SIZES.priceText,
        color: COLORS.black,
    }, text2: {
        fontSize: SIZES.priceText,
        color: COLORS.green,
        fontWeight: 'bold'
    },

})

export default styles;

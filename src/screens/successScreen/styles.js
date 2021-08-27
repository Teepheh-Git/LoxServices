import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONTS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SIZES.W,
        height: SIZES.H,
        justifyContent: 'center',
        backgroundColor: COLORS.white,


    },
    root: {
        bottom: 150,
        alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        width: SIZES.W * 0.4,
        height: SIZES.H * 0.2,
    },
    text: {
        top: 40,
        fontSize: SIZES.body2,
        fontWeight: '700'
    },
})

export default styles

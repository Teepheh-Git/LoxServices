import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONTS} from "../../constants";

const styles = StyleSheet.create({
    container: {
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
})

export default styles

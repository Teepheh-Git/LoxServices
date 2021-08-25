import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";


const styles = StyleSheet.create({

    container: {
        width: SIZES.W,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize: SIZES.buttonText,
            ...FONTS.textButtonFont,

    }
})

export default styles;

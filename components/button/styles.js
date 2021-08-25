import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants'


const styles = StyleSheet.create({
    container: {
        width: SIZES.W,
        padding: SIZES.padding,

    },
    button: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        borderRadius: SIZES.radius,
        borderWidth: SIZES.borderWidth,
        borderColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: SIZES.buttonText2,
        textTransform: 'uppercase',
        ...FONTS.buttonFont2

    },

});


export default styles;

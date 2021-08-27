import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants'


const styles = StyleSheet.create({
    container: {
        width: SIZES.W,
        padding: SIZES.padding,
        justifyContent:'center',
        alignItems:'center',


    },
    button: {
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        borderRadius: SIZES.radius,
        borderWidth: SIZES.borderWidth,
        borderColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
        shadowColor: COLORS.black,
        shadowOffset:{ height: 9},
        shadowOpacity: 0.3,


    },
    text: {
        fontSize: SIZES.buttonText2,
        textTransform: 'uppercase',
        ...FONTS.buttonFont2

    },

});


export default styles;

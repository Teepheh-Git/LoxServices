import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONTS} from '../../constants'


const styles = StyleSheet.create({

    container:{
        width: SIZES.W,
        padding: SIZES.padding,
        // justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        paddingHorizontal:SIZES.padding,
        height: SIZES.buttonHeight,
        width: SIZES.buttonWidth,
        borderWidth: SIZES.borderWidth,
        borderColor: COLORS.gray,
        ...FONTS.textInputFont
    }

})


export default styles;

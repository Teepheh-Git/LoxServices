import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.white,
        height: SIZES.H,
        width: SIZES.W,
        padding: 20
    },

    text: {
        fontSize: SIZES.body2,
        fontWeight: '700',
        marginVertical: 10
    },
    imgPlaceholder: {
        marginVertical: 11,
        left: 37

    },
    taskTitleContainer: {
        top: 11,
        flexDirection: 'row'
    }, taskTitleContainer2: {
        top: 38,
        left: 51,
        flexDirection: 'row',
    },
    taskTitle: {
        fontSize: 13,
        color: COLORS.blue,

    },
    taskTitle2: {
        fontSize: 13,
        color: COLORS.red,

    },
    taskTitle3: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.gray4,


    }, taskTitle5: {
        fontSize: 13,
        color: COLORS.red,

    },
    taskTitle4: {
        fontSize: 9,
        color: COLORS.gray4,

    },
    textInputView: {
        alignItems: 'center',
        width: SIZES.W * 0.9,

    },
    textInput: {
        height: 50,
        width: SIZES.W * 0.9,
        borderWidth: SIZES.borderWidth,
        borderColor: COLORS.gray,
        ...FONTS.textInputFont,
        backgroundColor: COLORS.gray2,

    },
    datePickerStyle: {
        width: SIZES.W * 0.9,
        marginTop: 20,
        backgroundColor: COLORS.gray2,

    },
    inputIOS: {
        backgroundColor: COLORS.gray2,
        borderColor: COLORS.gray,
        color: COLORS.black,
        borderWidth: 1,
        height: 50,
        padding: 10,
        paddingLeft: 40,
        fontSize: SIZES.body,

    },
    inputAndroid: {
        color: COLORS.black,
        backgroundColor: COLORS.gray2,
        borderColor: COLORS.gray,
        borderWidth: 1,
        height: 50,
        width: SIZES.W * 0.9,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: 40,
        fontSize: SIZES.body,
    },
    cardContainer: {
        width: SIZES.W * 0.9,
        top: 35,
        left: 11,
    },
    button: {
        width: SIZES.W * 0.85,
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 70
    }
})


export default styles

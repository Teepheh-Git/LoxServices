import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({

    container: {
        width: SIZES.W,
        height: SIZES.H * 0.9
    },
    image: {
        width: SIZES.W,
        height: SIZES.H * 0.3

    },
    imageContainer: {
        backgroundColor: COLORS.black,
        height: SIZES.H * 0.3
    },
    orderNowContainer: {
        padding: 25
    },

    orderNow: {
        fontSize: SIZES.header2,
        fontWeight: '700',
        marginVertical: 10
    },
    taskTitleContainer: {
        top: 36,
        left: 12,
        flexDirection: 'row'
    },
    taskTitle: {
        fontSize: 9,
        color: COLORS.blue,

    },
    taskTitle2: {
        fontSize: 10,
        color: COLORS.red,

    },
    taskTitle3: {
        fontSize: 10,
        color: COLORS.black,

    },
    timeEstimate: {
        fontSize: SIZES.body,
        fontWeight: '600',
    },
    inputIOS: {
        backgroundColor: COLORS.gray2,
        borderColor: COLORS.gray,
        borderWidth: 1,
        height: 50,
        padding: 10,
        marginVertical: 20,
        fontSize: SIZES.body,

    },
    inputAndroid: {
        color: COLORS.black,
        backgroundColor: COLORS.gray2,
        borderColor: COLORS.gray,
        borderWidth: 1,
        height: 50,
        padding: 10,
        marginVertical: 20,
        fontSize: SIZES.body,
    },
    button: {
        backgroundColor: COLORS.black,
        width: SIZES.W * 0.85,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: 30,
    }


})

export default styles

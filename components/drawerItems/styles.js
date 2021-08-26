import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({

    root: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        justifyContent: 'space-between',
        height: SIZES.H * 0.8,
        alignItems: 'flex-start',
        padding: SIZES.body2,
    },

    container: {
        justifyContent: 'center',
        bottom: 100
    },
    text: {
        fontSize: SIZES.body2,
        marginVertical: 20
    },
    signOutText: {
        fontSize: SIZES.body2,
        color: COLORS.red
    },
    signOutContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',

    }
})


export default styles

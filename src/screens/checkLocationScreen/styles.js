import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: SIZES.H,
        backgroundColor: COLORS.white,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    root: {
        height: 82,
        width: SIZES.W,
        backgroundColor: COLORS.gray5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 5
    },
    box: {
        width: SIZES.W,
        backgroundColor: COLORS.gray5,
        alignItems: 'center',
        marginVertical: 45,
    },
    text: {
        fontSize: 20,
        fontWeight: '700'
    },
    text2: {
        fontSize: 12,
        fontWeight: '500'
    },
    text3: {
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 1
    }, text4: {
        fontSize: 12,
    },
    mapContainer: {
        backgroundColor: '#fff',
    },
    map: {
        width: SIZES.W,
        height: 165
    },
    location: {
        width: SIZES.W,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: 'white',
        marginVertical: .5,


    }, location2: {
        width: SIZES.W,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginVertical: 1,


    },
    locationText: {
        fontSize: 14,
        fontWeight: '400',

    },
    button: {
        width: SIZES.W * .85,
        backgroundColor: 'black',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default styles;

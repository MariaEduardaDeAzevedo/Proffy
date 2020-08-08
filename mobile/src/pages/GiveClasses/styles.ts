import { StyleSheet } from 'react-native'

import light_mode from '../../assets/colors/light_mode'
import dark_mode from '../../assets/colors/dark_mode'

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8257e5',
        padding: 40,
    },

    containerLight : {
        backgroundColor: light_mode.landingColor,
    },

    containerDark : {
        backgroundColor: dark_mode.landingColor,
    },

    header: {
        justifyContent: 'flex-start'

    },

    buttonBack: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        marginLeft: -24,
    },

    content: {
        flex:1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: "#fff",
        fontSize: 32,
        maxWidth: 180,
        lineHeight: 37,
    },

    description: {
        marginTop: 24,
        color: "#d4c2ff",
        fontSize: 16,
        lineHeight: 26, 
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },
    button: {
        marginVertical: 40,
        backgroundColor: '#04d341',
        height: 80,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8,
    },

    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'Archivo_700Bold', 
    },
});

export default styles;

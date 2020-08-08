import { StyleSheet } from 'react-native'

import light_mode from '../../assets/colors/light_mode'
import dark_mode from '../../assets/colors/dark_mode'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    },
    containerLight : {
        backgroundColor: light_mode.landingColor,
    },

    containerDark : {
        backgroundColor: dark_mode.landingColor,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    bold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },
    
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
    },

    totalConnections: {
        color: "#d4c2ff",
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        maxWidth: 160,
        lineHeight: 20,
        marginTop: 40,
    },

    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    buttonThemeMode: {
        marginTop: 32,
        height: 64,
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;

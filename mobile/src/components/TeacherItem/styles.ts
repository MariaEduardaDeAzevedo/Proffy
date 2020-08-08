import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden",
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        height: 88,
        width: 88,
        borderRadius: 54,
        backgroundColor: '#eee',
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: "#32264d",
        fontSize: 24,
        width: 240,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 16, 
        marginTop: 4,
    },

    bio : {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        fontSize: 16,
        color: "#6a6180",
    }, 

    footer: {
        marginTop: 24,
        backgroundColor: "#fafafc",
        padding: 24,
        alignItems: 'center',
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: "#6a6180",
        fontSize: 18,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: "#8257e5",
        fontSize: 20,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
    },

    favoriteButton: {
        backgroundColor: "#8257e5",
        width: 56,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',  
        marginRight: 8,
    },

    fav: {
        backgroundColor: "#e33d3d"
    },

    contactButton: {
        backgroundColor: "#04d361",
        flex: 1,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },

    contactButtonText: {
        color: "#fff",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
        marginLeft: 16,
    }
})

export default styles;
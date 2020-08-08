import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7",
    },
    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 8,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputView: {
        width: '48%',
    },

    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff'
    },

    input: {
        fontFamily: 'Poppins_400Regular',
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    }
});

export default styles;
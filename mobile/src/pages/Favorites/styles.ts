import { StyleSheet } from "react-native";

import light_mode from '../../assets/colors/light_mode'
import dark_mode from '../../assets/colors/dark_mode'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerLight: {
        backgroundColor: light_mode.bgColor,
    },
    
    containerDark: {
        backgroundColor: dark_mode.bgColor,
    },

    teacherList: {
        marginTop: -60,
    },
});

export default styles;
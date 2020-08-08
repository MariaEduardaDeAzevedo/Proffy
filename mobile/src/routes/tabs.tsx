import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from "react-native";

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const { Navigator, Screen } = createBottomTabNavigator();

const styles = StyleSheet.create({
    tst : {
        backgroundColor: "#000",
    }
})

interface Params {
    params: {
        theme: boolean;
    },
    name: string;
    key: string;
};

function Tabs() {

    const theme = useRoute<Params>().params.theme;
    const navigation = useNavigation();

    console.log(theme)

    return(
        <Navigator
        tabBarOptions={
            {
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d',
        }}>
            <Screen name="TeacherList" component={TeacherList} 
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) => {
                        return(
                            <Ionicons size={size} color={focused ? '#8257e5' : color} name="ios-easel"/>
                        )
                    }
                }}
            />
            <Screen name="Favorites" component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size, focused}) => {
                        return(
                            <Ionicons size={size} color={focused ? '#8257e5' : color} name="ios-heart"/>
                        )
                    }
                }}
            />
        </Navigator>
    );
}


/**
 * options={{
                    
                }}
 */
export default Tabs;

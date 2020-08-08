import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader'
import { useFocusEffect } from '@react-navigation/native'

//Estilos
import styles from './styles'
import { useRoute } from '@react-navigation/native';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

interface Params {
    params: {
        theme: boolean;
    },
    name: string;
    key: string;
};

function Favorites() {

    const [styleTheme, setStyleTheme] = useState(styles.containerLight);
    const [favorites, setFavorites] = useState([]);

    console.log(useRoute<Params>()) 

    function loadFavs() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favs = JSON.parse(response);
                setFavorites(favs);
            }
        })
    } 

    return(
        <View style={[styles.container, styleTheme]}>
            <PageHeader title="Meus Proffys Favoritos" hidde={false}>
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {
                    favorites.map((teacher:Teacher) => {
                        return(
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher} 
                                fav={true}/>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Favorites;

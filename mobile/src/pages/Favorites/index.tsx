import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import PageHeader from '../../components/PageHeader'

//Estilos
import styles from './styles'


function Favorites() {
    return(
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos">

            </PageHeader>
        </View>
    );
}

export default Favorites;

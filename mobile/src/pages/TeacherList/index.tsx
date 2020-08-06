import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

//Estilos
import styles from './styles'
import PageHeader from '../../components/PageHeader';


function TeacherList() {
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis">

            </PageHeader>
        </View>
    );
}

export default TeacherList;

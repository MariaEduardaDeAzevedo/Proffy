import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

//Imagens
import landing from '../../assets/images/landing.png';
import study from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';

//Estilos
import styles from './styles'

function Landing() {

    const navigation = useNavigation();

    function handleNavigateToGiveClasses() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudy() {
        navigation.navigate('Study');
    }

    return(
        <View style={styles.container}>
            <Image source={ landing } style={ styles.banner }></Image>
            <Text style={ styles.title }> 
                Olá! Seja bem-vinde ao Proffy!{'\n'}
                <Text style={ styles.bold }>
                    O que deseja fazer?
                </Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress = { handleNavigateToStudy } style={[styles.button, styles.buttonPrimary]}>
                    <Image source={ study }/>
                    <Text style={ styles.buttonText }>Estudar</Text>
                </RectButton>
                <RectButton onPress = { handleNavigateToGiveClasses } style={[styles.button, styles.buttonSecondary]}>
                    <Image source={ giveClasses }/>
                    <Text style={ styles.buttonText }>Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={ styles.totalConnections }>
                Total de 0 conexões já realizadas
            </Text>
        </View>
    );
}

export default Landing;

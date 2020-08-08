import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

//Imagens
import landing from '../../assets/images/landing.png';
import study from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';

//Estilos
import styles from './styles'

function Landing() {

    const navigation = useNavigation();

    const [theme, setTheme] = useState(true);
    const [themeIcon, setThemeIcon] = useState('sun');
    const [styleTheme, setStyleTheme] = useState(styles.containerLight);
    const [connections, setConnections] = useState(0);

    function changeTheme() {
        if (themeIcon === 'sun') {
            setTheme(false);
            setThemeIcon('moon');
            setStyleTheme(styles.containerDark);
        } else {
            setTheme(true);
            setThemeIcon('sun');
            setStyleTheme(styles.containerLight);
        }
    }

    function handleNavigateToGiveClasses() {
        navigation.navigate('GiveClasses', {theme});
    }

    function handleNavigateToStudy() {
        navigation.navigate('Study', {theme});
    }

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setConnections(total);
        })
    }, [connections]);

    return(
        <View style={[styles.container, styleTheme]}>
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
            <View style={styles.footer}>
                <Text style={ styles.totalConnections }>
                    Total de {connections} conexões já realizadas
                </Text>
                <BorderlessButton onPress={ changeTheme } style={styles.buttonThemeMode}>
                    <Feather name={themeIcon} size={32} color="#f0f0f7"/>
                </BorderlessButton>
            </View>
        </View>
    );
}

export default Landing;

import React from 'react';
import { View, Text, Image, ImageBackground, Linking } from 'react-native';

//Imagens
import bgImage from '../../assets/images/give-classes-background.png'

//Estilos
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function GiveClasses() {

    const navigation = useNavigation();

    async function handleNavigateToWebForm() {
        const can = await Linking.canOpenURL("http://192.168.1.10:3000/give-classes");
        
        navigation.goBack();

        if (can) {
            Linking.openURL("http://192.168.1.10:3000/give-classes")
        }

    }

    return(
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={ bgImage } style={styles.content}>
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para fazer parte, basta se cadastrar na 
                    nossa plataforma web. É simples e rápido!
                </Text>
            </ImageBackground>
            <RectButton onPress={ handleNavigateToWebForm } style={styles.button}>
                <Text style={styles.buttonText}>
                    Quero ser um Proffy!
                </Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;

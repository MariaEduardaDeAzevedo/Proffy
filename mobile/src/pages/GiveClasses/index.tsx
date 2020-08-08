import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Linking, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

//Imagens
import bgImage from '../../assets/images/give-classes-background.png'
import back from '../../assets/images/icons/back.png'

//Estilos
import styles from './styles'

interface Params {
    params: {
        theme: boolean;
    },
    name: string;
    key: string;
};

function GiveClasses() {

    const navigation = useNavigation();
    const params = useRoute<Params>().params;
    const [styleTheme, setStyleTheme] = useState(styles.containerLight);

    useEffect(() => {
        if (params.theme) {
            setStyleTheme(styles.containerLight);
        } else {
            setStyleTheme(styles.containerDark);
        }
    });

    async function handleNavigateToWebForm() {
        const can = await Linking.canOpenURL("http://192.168.1.10:3000/give-classes");
        
        navigation.goBack();

        if (can) {
            Linking.openURL("http://192.168.1.10:3000/give-classes")
        }

    }

    return(
        <View style={[styles.container, styleTheme]}>
            <ImageBackground resizeMode='contain' source={ bgImage } style={styles.content}>
                <View style={styles.header}>
                    <BorderlessButton onPress={() => {navigation.goBack()}} style={styles.buttonBack}>
                        <Image source={back}/>
                    </BorderlessButton>
                </View>
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

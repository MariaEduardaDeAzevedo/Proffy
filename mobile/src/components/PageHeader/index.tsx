import React from 'react'
import { View, Image, Text, PanResponder } from 'react-native';

import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

import back from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';

interface Properties {
    title: string;
}

const PageHeader: React.FC<Properties> = ({title}) => {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('Landing');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={ handleGoBack }>
                    <Image source={ back } resizeMode="contain" />
                </BorderlessButton>
                <Image source={ logo } resizeMode="contain" />
            </View>
            <Text style={ styles.title }>{title}</Text>
        </View>
    );
}

export default PageHeader;

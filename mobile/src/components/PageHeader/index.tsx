import React, { useState } from 'react'
import { View, Image, Text, PanResponder } from 'react-native';

import { Feather } from '@expo/vector-icons'
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

import back from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';

interface Properties {
    title: string;
    hidde:boolean;
}

const PageHeader: React.FC<Properties> = ({title, hidde, ...rest}) => {

    const navigation = useNavigation();

    const [hiddeChildreen, setHiddeChildreen] = useState(false);
    const [hiddeIcon, setHiddeIcon] = useState('chevrons-up')

    function handleGoBack() {
        navigation.navigate('Landing');
    }

    function handleHiddeChildreen() {
        if (hiddeChildreen) {
            setHiddeChildreen(false);
            setHiddeIcon('chevrons-up')
        } else {
            setHiddeChildreen(true);
            setHiddeIcon('chevrons-down')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={ handleGoBack }>
                    <Image source={ back } resizeMode="contain" />
                </BorderlessButton>
                <Image source={ logo } resizeMode="contain" />
            </View>
            <View style={styles.titleView}>
                <Text style={ styles.title }>{title}</Text>
                {
                    hidde && (
                    <BorderlessButton onPress={handleHiddeChildreen}>
                        <Feather name={hiddeIcon} size={32} color="#fff"/>
                    </BorderlessButton>)
                }
            </View>
                {
                    hidde && !hiddeChildreen && (<View>{rest.children}</View>)
                }
        </View>
    );
}

export default PageHeader;

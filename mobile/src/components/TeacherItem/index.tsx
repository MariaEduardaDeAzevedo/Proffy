import React, { useEffect, useState } from 'react'
import { View, Text, Image, Linking, ImageSourcePropType, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AsyncStorageStatic } from '@react-native-community/async-storage'

import styles from './styles'

import heart from '../../assets/images/icons/heart-outline.png'
import unfavorite from '../../assets/images/icons/unfavorite.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface Properties {
    teacher: Teacher;
    fav: boolean;
}

const TeacherItem:React.FC<Properties> = ({teacher, fav}) => {

    const [isFav, setIsFav] = useState(fav);

    function handleLinkWhatsApp() {
        const text = `Olá, Prof. ${teacher.name}, te encontrei no Proffy e tenho interesse em suas aulas de ${teacher.subject}! Poderia me dar mais detalhes?`
        const link = `whatsapp://send?phone${teacher.whatsapp}?text=${text}`
        api.post('connections', {
            user_id: teacher.id,
        })
        Linking.openURL(link);
    }

    async function handleFav() {
        
        const favorites = await AsyncStorage.getItem('favorites')
        
        var favsArray = [];

        if (favorites) {
            favsArray = JSON.parse(favorites);
        }

        if (isFav) {
            const favIndex = favsArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            })

            favsArray.splice(favIndex, 1);

            setIsFav(false);
        } else {
            favsArray.push(teacher);

            setIsFav(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favsArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}    
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Hora/Aula {'   '} 
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton onPress={ handleFav } style={[styles.favoriteButton, isFav ? styles.fav : {}]}>
                        {
                            isFav ? <Image source={ unfavorite }/> : <Image source={ heart }/>
                        }
                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={ handleLinkWhatsApp }>
                        <Image source={whatsapp}></Image>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
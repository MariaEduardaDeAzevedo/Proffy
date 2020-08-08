import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { AsyncStorageStatic } from '@react-native-community/async-storage';

//Estilos
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [classes, setClasses] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    async function filter() {
        const response = await api.get('classes',{
            params: {
                subject,
                week_day: Number(weekDay),
                time,
            }
        });

        console.log(response.data)

        setClasses(response.data);
    }

    function loadFavs() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favs = JSON.parse(response);
                const favsIds = favs.map((fav: Teacher) => {
                    return fav.id;
                });
                setFavorites(favsIds);
            }
        })
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavs();
        }, [])
    )

    useEffect(() => {
        if (subject !== '' && weekDay !== '' && time !== '') {
            filter();
            loadFavs();
        }
    }, [subject, weekDay, time]);

    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" hidde={true}>
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Displina</Text>
                    <TextInput
                        value={subject} 
                        placeholderTextColor="#c1bccc" 
                        style={styles.input} 
                        placeholder="EX. Matemática" 
                        onChangeText={(text) => setSubject(text)}
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputView}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput
                                value={weekDay} 
                                placeholderTextColor="#c1bccc" 
                                style={styles.input} 
                                placeholder="Dia da Semana" 
                                onChangeText={(text) => setWeekDay(text)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                value={time} 
                                placeholderTextColor="#c1bccc" 
                                style={styles.input} 
                                placeholder="Horário" 
                                onChangeText={(text) => setTime(text)}
                            />
                        </View>
                    </View>
                </View>
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {
                    classes.map((teacher: Teacher) => {
                        return(<TeacherItem 
                                    key={teacher.id}
                                    fav={favorites.includes(teacher.id)}
                                    teacher={teacher}
                                />);
                    })
                }
            </ScrollView>
            
        </View>
    );
}

export default TeacherList;

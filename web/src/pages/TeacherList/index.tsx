import React, { useState, useEffect } from 'react';

//Folha de estilo
import './styles.css'

//Componentes
import PageHeader from '../../components/PageHeader';
import Teacher, { TeacherProperties } from '../../components/Teacher';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    async function search() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data);
    }

    useEffect(() => {
        if (week_day !== "" && subject !== "" && time !== "") {
            search();
        }
    }, [week_day, subject, time]);

    return(
        <div id="page-teacher-list">
            <PageHeader title="Estes são os Proffys disponíveis!">
                <div id="search-teachers">
                    <Input name="Disciplina" id="subject" placeholder="Ex. Matemática"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                    />
                    <Select 
                        name="Dia da Semana"
                        id="week_day"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            {value: '0', label: "Domingo"},
                            {value: '1', label: "Segunda-Feira"},
                            {value: '2', label: "Terça-Feira"},
                            {value: '3', label: "Quarta-Feira"},
                            {value: '4', label: "Quinta-Feira"},
                            {value: '5', label: "Sexta-Feira"},
                            {value: '6', label: "Sábado"},
                        ]}
                    />
                    <Input name="Hora" id="time" type="time" 
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                </div>
            </PageHeader>
            <main>
                {teachers.map((teacher:TeacherProperties)=> {
                    return(
                        <Teacher 
                            key = {teacher.id}
                            teacher={teacher}
                        />
                    )          
                })}
            </main>
        </div>
    );
}

export default TeacherList;
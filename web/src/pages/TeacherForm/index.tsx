import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

//Componentes
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

//Imagens
import warning from '../../assets/images/icons/warning.svg'

//Folha de estilo
import './styles.css'
import api from '../../services/api';

function TeacherForm() {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [schedule, setSchedule] = useState([{
        week_day: 0,
        from: "",
        to: "",
    }]);

    const history = useHistory();

    function newScheduleItem() {
        var item = {
            week_day: 0,
            from: "",
            to: "",
        }
        setSchedule([...schedule, item]);
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const newArray = schedule.map((item, i) => {
            if (index === i) {
                return { ...item, [field]: value }
            }
            return item;
        })

        setSchedule(newArray);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule,
        }).then(() => {
            alert(`Cadastro realizado com sucesso! Parabéns, ${name} você agora é um Proffy!`)
            history.push('/');
        }).catch(() => {
            alert("Ops... Algo deu errado ao concluir o seu cadastro no Proffy...");
        });
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Olá, Proffy! Que incrível que você quer dar aulas!" description="O primeiro passo é preencher este formulário de inscrição"/>
            <main>
                <form onSubmit={ handleSubmit }>
                    <fieldset>
                        <legend>
                            Seus Dados
                        </legend>
                        <Input name="Nome" placeholder="Ex. Ariel Alves" id="name" onChange={(e) => { setName(e.target.value) } } value={ name }/>
                        <Input name="Avatar" placeholder="Ex. https://meuavatar.com/ariel_alves" id="avatar" onChange={(e) => { setAvatar(e.target.value) } } value={ avatar }/>
                        <Input name="Whatsapp" placeholder="Ex. 83988883333" id="whatsapp" onChange={(e) => { setWhatsapp(e.target.value) } } value={ whatsapp }/>
                        <TextArea name="Bio" placeholder="Ex. Professora Doutora em Matemática, apaixonada por números, cálculos e ensinar!" id="bio" onChange={(e) => { setBio(e.target.value) } } value={ bio }/>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Sobre a aula
                        </legend>
                        <Input name="Disciplina" placeholder="Ex. Matemática" id="subject" onChange={(e) => { setSubject(e.target.value) } } value={ subject }/>
                        <Input name="Hora/Aula" placeholder="Ex. 90.50" id="cost" onChange={(e) => { setCost(e.target.value) } } value={ cost }/>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={ newScheduleItem }>+ Novo Horário</button>
                        </legend>
                        {
                            schedule.map((item, index) => {
                                return (
                                    <div key={ item.week_day } className="schedule-item">          
                                        <Select
                                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                            value = {item.week_day}
                                            name="Dia da Semana"
                                            id="week_day"
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
                                        <Input name="Das" type="time" id="from" value={ item.from } onChange={ (e) => setScheduleItemValue(index, 'from', e.target.value) }/>
                                        <Input name="Até" type="time" id="to" value={ item.to } onChange={ (e) => setScheduleItemValue(index, 'to', e.target.value) }/>
                                    </div>
                                );
                            })
                        }
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warning} alt="Atenção"/>
                            Importante! <br />
                            Preencha todos os dados.
                        </p>
                        <button type="submit" onClick={ handleSubmit }>Finalizar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
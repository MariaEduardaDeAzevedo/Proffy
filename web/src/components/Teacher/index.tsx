import React from 'react'

//Imagens
import whatsapp from '../../assets/images/icons/whatsapp.svg'

//Folha de estilo
import './styles.css'
import api from '../../services/api'

export interface TeacherProperties {
    name: string;
    subject: string;
    bio: string;
    cost: number;
    id: number;
    avatar: string;
    whatsapp: string;
}

interface Properties {
    teacher: TeacherProperties;
}

const Teacher : React.FC<Properties> = (props) => {
    
    const text = `Olá, Prof. ${props.teacher.name}, te encontrei no Proffy e tenho interesse em suas aulas de ${props.teacher.subject}! Poderia me dar mais detalhes?`

    function connection() {
        api.post('connections', {
            user_id: props.teacher.id,
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={ props.teacher.avatar } alt={ props.teacher.name }/>
                <div>
                    <strong> { props.teacher.name } </strong>
                    <span> { props.teacher.subject } </span>
                </div>
            </header>
            <p>
                { props.teacher.bio }
            </p>
            <footer>
                <p>
                    Hora Aula
                    <strong>R$ { props.teacher.cost }</strong>
                </p>
                <a onClick={ connection } target="_blank" href={`https://wa.me/${props.teacher.whatsapp}?text=${text}`}>
                    <img src={ whatsapp } alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default Teacher;
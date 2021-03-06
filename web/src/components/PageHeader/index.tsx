import React from 'react'
import { Link } from 'react-router-dom';

//Imagens
import back from '../../assets/images/icons/back.svg'
import logo from '../../assets/images/logo.svg'

//Folha de estilo
import './styles.css'

interface Properties {
    title: string;
    theme: boolean;
    description?: string;
}

const PageHeader: React.FC<Properties> = (props) => {
    return (
        <header className="page-header" style={{backgroundColor: props.theme ? "#8257E5" : "#261b40"}}>
            <div className="top-bar-container">
                <Link to="/">
                    <img src={ back } alt="Voltar"></img>
                </Link>
                <img src={ logo } alt="Proffy"></img>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;
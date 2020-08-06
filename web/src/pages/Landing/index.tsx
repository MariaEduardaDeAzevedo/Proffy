import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

//Imagens
import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import classes from '../../assets/images/icons/give-classes.svg'

//Folha de estilo
import './styles.css'

//API
import api from '../../services/api';

function Landing() {

    const [totalCon, setTotalCon] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalCon(response.data.total);
        })
    }, [totalCon])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={ logo } alt="Proffy"/>
                    <h2>Sua plataforma de estudo remoto.</h2>
                </div>
                <img 
                    src={ landing } 
                    alt="Plataforma de estudo remoto"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={ study } alt="Estudar"></img>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="classes">
                        <img src={ classes } alt="Dar aulas"></img>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de { totalCon } conexões já realizadas
                </span>
            </div>
        </div>
    ); 
}

export default Landing;
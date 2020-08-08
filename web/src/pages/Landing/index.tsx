import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'react-feather'

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
    const [theme, setTheme] = useState(true);

    function changeTheme() {
        if (theme) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalCon(response.data.total);
        })
    }, [totalCon])

    return(
        <div id="page-landing" style={{backgroundColor: theme ? "#8257E5" : "#261b40"}}>
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
                    <Link to={`/study?mode=${theme}`} className="study">
                        <img src={ study } alt="Estudar"></img>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="classes">
                        <img src={ classes } alt="Dar aulas"></img>
                        Dar aulas
                    </Link>
                </div>
                <div className="vish-kk">
                    <span className="total-connections">
                        Total de { totalCon } conexões já realizadas
                    </span>
                </div>
            </div>
            <button 
                onClick={ changeTheme } 
                className="theme-mode-button" 
                style={{backgroundColor: theme ? "#8257E5" : "#261b40", borderColor : theme ? "#04d361" : "#FFFFFF"}}>
                {   
                    theme ?
                    <Moon color="#04d361" style={{marginTop: theme ? 24 : 0}}/> :
                    <Sun color="#FFFFFF" style={{marginTop: theme ? 0 : -48}}/> 
                }
            </button>
        </div>
    ); 
}

export default Landing;
import React, {Component} from  'react'
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie'
import { Button } from "react-bootstrap";

const cookies = new Cookies();


class Intro extends Component {
    render(){
        cookies.remove('idUser',{path: "/Proyecto/"});
        cookies.remove('usuario',{path:"/Proyecto/"});
        return(
            <div>
                <p>Integrantes: </p>
                <p>Lobato Zubillaga Fernanda</p>
                <p>López Cruz Cesar</p>
                <p>Profesor: PEREDO VALDERRAMA RUBEN</p>
                <p>Materia: TECNOLOGIAS PARA DESARROLLO DE APLICACIONES WEB</p>
                <p> Grupo: 4CM6</p>
                <Button>
                <Link to="/Proyecto/" className="CustomLink">Iniciar sesión</Link>
                </Button>

            </div>
        )
    }
}

export default Intro;
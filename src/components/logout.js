import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Layout } from "antd";

const cookies = new Cookies();
class Home extends React.Component {

    /*componentDidMount() 
    {

    }*/

    validar=(usuario,password) =>{
        cookies.remove('idUser',{path: "/Proyecto/"});
        cookies.remove('usuario',{path:"/Proyecto/"});
        window.location.href = './Intro';
    }

    render() {
        
    }

}

export default Home;
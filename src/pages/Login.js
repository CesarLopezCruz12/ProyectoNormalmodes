import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery"
import Home from "../components/home";
import Cookies from 'universal-cookie'
import logo from '../img/logo.PNG'
import { Button } from "react-bootstrap";

const cookies = new Cookies(); 

class Login extends React.Component {
    
  
  state={
    val: false,
  }

    cambiar = () =>{
        this.setState((state)=>({
          val:true,
          comp: <Home></Home>
        }))
    }
      validar=(usuario,password) =>{
        var datos={
            User: usuario,
            password: password
        }

        $.get("http://localhost:8080/Proyecto/Login",datos, (resultado)=>{
        
          if(resultado[0].usuario !="error"){
            //localStorage.setItem("UserData",JSON.stringify(resultado));
            cookies.set('idUser',resultado[0].idUser,{path: "/Proyecto/"});
            cookies.set('usuario',resultado[0].usuario,{path:"/Proyecto/"});
            this.state.val = true;
            this.forceUpdate();

          }else{
            alert("USUARIO NO REGISTRADO")
          }
          
        })
     
    }
    render() {
      const styles = {
          padding : '5px'
      }
      
      const qId = (new URLSearchParams(window.location.search).get("val") == "true")? true:false;
      const undiv=  <div className = "center-container" style={styles} id="equis">
               <div className = "center-container">
                <img src={logo} alt="normal_modes" class="rounded mx-auto d-block"/>
               </div>
               <h1 className="AlignCenter" > Normal Modes</h1>
            <div class="form-outline mb-4">
                <label class="form-label" for="User">Usuario</label>
                <input placeholder="Ingrese el usuario" type="text" id="User" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="password">Password</label>
              <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control" />
            </div>
            
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => this.validar(document.getElementById("User").value,document.getElementById("password").value)}>
                Enviar
            </button>
              
              <div class="text-center">
                <Button>
                  <Link to="/Proyecto/registro" className="CustomLink">Registrar</Link>
                </Button>  
              </div>
            </div>
       const esValido = (this.state.val) || qId?<Home></Home>: undiv
        return(
          <div>
            {esValido}
            {console.log(esValido)}
          </div>
        )    
  }
}
export default Login; 
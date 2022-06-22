import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import { browserHistory } from "react-router";
import ReactDOM from "react-dom"
import Home from "../components/home"
import { Link } from "react-router-dom";
import Cookies  from "universal-cookie";

const cookies = new Cookies(); 

class ModificarUser extends React.Component{
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
       /* if(usuario == NULL || usuario ==  ""){
            usuario = "0";
        }
        if(password == NULL || password == ""){
            password = "0";
        }*/
        //onsole.log(usuario + "  " + password + "  " + cookies.get('idUser') + "  " + cookies.get('usuario'));
        //IdUser:  cookies.get('idUser'),
            //Usercookies: cookies.get('usuario'),
          const idSession = cookies.get('idUser');
          const username = cookies.get('usuario'); 


        var datos={
            
            User: usuario,
            password: password,
            Iduser: idSession,
            Usercookies: username

        }

        $.post("http://localhost:8080/Proyecto/UpdateUser",datos, (resultado)=>{
        
          if(resultado[0].message == "1"){
            alert("Usuario Modificado");
          }else{
            alert("Datos invalidos o fallo del sistema");
          }
          
        })
     
    }
    render() {
      const styles = {
          padding : '5px'
      }
      /*const qId = (new URLSearchParams(window.location.search).get("val") == "true")? true:false;
      const undiv=  <div className = "center-container" style={styles} id="equis">
               <h1 className="AlignCenter" > REGISTRO </h1>
            <div class="form-group">
                <label class="form-label" for="User">Usuario</label>
                <input placeholder="Ingrese el usuario" type="text" id="User" class="form-control" />
                    </div>
                    <div class="form-group"><label class="form-label" for="password">Password</label>
                    <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control" />
    
                    </div>
            <button className="btn btn-primary" onClick={() => this.validar(document.getElementById("User").value,document.getElementById("password").value)}>
                Sumit
              </button>
              <Link to="/Registro" className="CustomLink">Registrar</Link> 
            </div>
       const esValido = (this.state.val) || qId?<Login></Login>: undiv*/
        return(
          <div>
            <h1 className="AlignCenter" > Modificar usuario </h1>
            <div class="form-group">
                <label class="from-label">Modifica únicamente los datos que desees</label>
            </div>
            <div class="form-group">
                <label class="form-label" for="User">Usuario</label>
                <input placeholder="Ingrese el usuario" type="text" id="User" class="form-control" />
            </div>
            <div>
                <label class="form-label" for="User">Contraseña</label>
                <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control" />
            </div>
            <button className="btn btn-primary" onClick={() => this.validar(document.getElementById("User").value,document.getElementById("password").value)}>
                Modificar Usuario
            </button>

            
            
          </div>
        )       
    }
    }
export default ModificarUser; 
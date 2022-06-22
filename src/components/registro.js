import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import { browserHistory } from "react-router";
import ReactDOM from "react-dom"
import Home from "./home"
import { Link } from "react-router-dom";


class Registro extends React.Component{
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

        $.post("http://localhost:8080/Proyecto/RegisterUser",datos, (resultado)=>{
        
          if(resultado[0].message == "1"){
            alert("Usuario Registrado");
            

          }else{
            alert("USUARIO NO REGISTRADO O EXISTENTE POR FAOVR INTENTE DE NUEVO");
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
            <h1 className="AlignCenter" > REGISTRO </h1>
            <div class="form-group">
                <label class="form-label" for="User">Usuario</label>
                <input placeholder="Ingrese el usuario" type="text" id="User" class="form-control" />
            </div>
            <div class="form-group"><label class="form-label" for="password">Password</label>
                <label class="form-label" for="User">Contraseña</label>
                <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control" />
            </div>
            <button className="btn btn-primary" onClick={() => this.validar(document.getElementById("User").value,document.getElementById("password").value)}>
                Guardar Usuario
            </button>
            <div>
              <nav>
              <Link to="/Proyecto/" className="CustomLink" >Iniciar sesión</Link>
              </nav>
            </div>
          </div>
        )       
    }
    }
export default Registro; 
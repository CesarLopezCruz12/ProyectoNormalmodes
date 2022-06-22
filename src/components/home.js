import React, { useState } from "react";
import { Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Layout, Col, InputNumber, Row, Slider , Button} from "antd";

import "../SCSS/style.css";

const cookies = new Cookies();
const { Header, Footer, Sider, Content } = Layout;
class Home extends React.Component {

    /*componentDidMount() 
    {

    }*/

    Salir = () =>{
        cookies.remove('idUser',{path: "/Proyecto/"});
        cookies.remove('usuario',{path:"/Proyecto/"});
        window.location.href = './Intro';
    }
    
    render() {
        
        
        const IntegerStep = () => {
            const [inputValue, setInputValue] = useState(1);
            const onChange = (newValue) => {
              setInputValue(newValue);
              Line(inputValue);
            };
            return (
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={10}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={10}
                    style={{
                      margin: '0 16px',
                    }}
                    value={inputValue}
                    onChange={onChange}
                  />
                </Col>
              </Row>
            );
          };

        const Line = (inputValue) =>{
            var rows = [];
            console.log("Paso");
             for(var i = 0; i< inputValue; i++) {
                rows.push(<div key={i}>Elemento</div>);
             }    
              return rows;
        }

        return (
            <Layout className="layout">
                <Layout>
                    <Header>
                      <Sider>
                      <Button>
                        <Link to="/Proyecto/ModificarUser" className="CustomLink">Modificar Usuario</Link>
                    </Button>
                    <Button>
                        <Link to="/Proyecto/Borrarusuario" className="CustomLink">Eliminar perfil</Link>
                    </Button>
                    <Button onClick={() => this.Salir()}>
                    Salir 
                    </Button>
                      </Sider>

                    </Header>
                </Layout>
                <Layout>
                <Content>
                    <Button onClick={() => window.open( 'http://127.0.0.1:8081/normal-modes/normal-modes_en.html')}>
                            Abrir Simulación
                    </Button>
                    <p>
                      Hecho por:
                    </p>
                    <p>  
                       Lobato Zubillaga Fernanda
                    </p>
                    <p>
                      López Cruz Cesar
                    </p>
                </Content>
                </Layout>
            </Layout>
            
        )
    }

}

export default Home;
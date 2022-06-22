import React from "react";
import Form from "react-bootstrap/Form"
//import Button from "react-bootstrap/Button"
import $ from "jquery"
import { browserHistory } from "react-router";
import ReactDOM, { render } from "react-dom"
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutFooter from "../layouts/LayoutFooter";
import { Link } from "react-router-dom";
import { Layout, Button,  Col, InputNumber, Row, Slider  } from "antd";
import { useState } from 'react';


class NormalModes extends React.Component {
    /*
    const{ Sider, Header, Content, Footer } = Layout;
    const IntegerStep = () => {
        const [inputValue, setInputValue] = useState(1);
      
        const onChange = (newValue) => {
          setInputValue(newValue);
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

    onTrigger = () => {
        this.this.props.lineCallback(inputValue); 
    };
    

    */

    render(){
      const{ Sider, Header, Content, Footer } = Layout;
        const IntegerStep = () => {
            const [inputValue, setInputValue] = useState(1);
          
            const onChange = (newValue) => {
              setInputValue(newValue);
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
        
        return(
          <Layout>
          <Layout>
              <Layout>
                  <Content>
                      <LayoutBasic/>
                  </Content>
              </Layout>
              <Layout>
                  <Content>
                      <LayoutFooter/>
                  </Content>
              </Layout>
          </Layout>
          <Sider>
              <Layout>
                  <Content>
                      <Button>Posición Inicial</Button>
                      <Button>Posición Cero</Button>
                    <IntegerStep />
                    <Button >Mostrar</Button>
                  </Content>
              </Layout>
              <Layout>
                  <Content>Content</Content>
              </Layout>
          </Sider>
      </Layout>
        )
    }
    
    
}
export default NormalModes;
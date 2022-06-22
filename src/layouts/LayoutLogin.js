import React,{ useState }from 'react';
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";


export default function LayoutLogin(props) {
    //console.log(props);
    const{ routes } = props;
    const{ Header, Content, Footer} = Layout;

    return  (
            <Layout>         
                    <Header className="layout-login__header">
                    </Header>
                    <Content className="layout-login__content">
                        <LoadRoutes routes={routes} />
                        
                    </Content>
                    <Footer>

                    </Footer>
            </Layout>      
            
    );
}


function LoadRoutes({ routes }) {

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route 
                 key={index} 
                 path={route.path}
                 exact={route.exact}
                 component={route.component}
                />
             ))}
        </Switch>
    );
}
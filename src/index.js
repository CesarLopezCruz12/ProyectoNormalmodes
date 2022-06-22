import React from "react";
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import Login from './pages/login'
import NormalModes from './components/normalmodes';
import Intro from './pages/Intro'
import Registro from "./components/registro";
import ModificarUser from "./pages/ModificarUser";
import HomeUser from './pages/HomeUser';
import LayoutBasic from "./layouts/LayoutBasic";
import LayoutFooter from "./layouts/LayoutFooter";
import Lines from './components/lines';
import 'antd/dist/antd.css'
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Proyecto/" component={Login}/>
                <Route exact path="/Proyecto/index.html" component={Intro}/>
                <Route exact path="/Proyecto/HomeUser" component={HomeUser}/>
                <Route exact path="/Proyecto/home" component={Home}/>
                <Route exact path="/Proyecto/registro" component={Registro}/>    
                <Route exact path="/Proyecto/NormalModes" component={NormalModes}/>
                <Route exact path='/Proyecto/ModificarUser' component={ModificarUser}/>
                <Route exact path="/Proyecto/LayoutBasic" component={LayoutBasic}/>
                <Route exact path="/Proyecto/LayoutFooter" component={LayoutFooter}/>
                <Route exact path="/Proyecto/Lines" component={Lines}/>
                <Route path="*" render={() => <h1>Página no encontrada</h1>} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;
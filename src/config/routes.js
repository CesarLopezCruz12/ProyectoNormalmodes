//Layouts
import LayoutBasic from '../layouts/LayoutBasic';
import LayoutLogin from '../layouts/LayoutLogin';
import LayoutUser from '../layouts/LayoutUser';

//Pages
import Intro from '../pages/Intro';
import Login from '../pages/Login';
import UserHome from '../pages/HomeUser';

const routes = [
    {
        path:"/login",
        component:LayoutLogin,
        exact: false,
        routes:[
            {
                path:"/login",
                component: Login,
                exact: true
            }
        ]  
    },
    {
        path:"/user",
        component:LayoutUser,
        exact: false,
        routes:[
            {
                path:"/user",
                component:UserHome,
                exact: true
            }
        ]  
    },
    {

        path:"/",
        componet: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Intro,
                exact: true
            },
            {
                component: Error404
            }    
        ]
    }
]
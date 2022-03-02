import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login/login';
import Register from './Register/register';
import Contact from './Contact/contact';
import Sales from './Sales/sales';
import Product from './Product/product';
import Settings from './Settings/settings';
import Home from './Home/home';
import DashBoardHome from './DashboardHome/dashBoardHome';

const Routing = () => {
    return(
        <BrowserRouter>
            {/* <Login/> */}
             <Route exact path="/" component={Home}/>
             <Route  path="/login" component={Login}/>
             <Route  path="/dashBoardHome" component={DashBoardHome}/>
             <Route  path="/register" component={Register}/>
             <Route  path="/contact" component={Contact}/>
             <Route  path="/sales" component={Sales}/>
             <Route  path="/product" component={Product}/>
             <Route  path="/settings" component={Settings}/>
        </BrowserRouter>
    )
}

export default Routing;
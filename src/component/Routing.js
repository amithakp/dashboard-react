import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login/login';
import Register from './Register/register';
import DashBoard from './DashBoard/dashBoard';
import Consignment from './Consignment/consignment';
import Tracking from './Tracking/tracking';
import Carriers from './Carriers/carriers';
import OrderHistory from './Order History/orderHistory';
import BillingDetails from './Billing Details/billingDetails';
import Settings from './Settings/settings';
import Home from './Home/Home';

const Routing = () => {
    return(
        <BrowserRouter>
             <Route exact path="/" component={Home}/>
             <Route  path="/dashBoard" component={DashBoard}/>
             <Route  path="/consignment" component={Consignment}/>
             <Route  path="/tracking" component={Tracking}/>
             <Route  path="/carriers" component={Carriers}/>
             <Route  path="/orderHistory" component={OrderHistory}/>
             <Route  path="/billingDetails" component={BillingDetails}/>
             <Route  path="/settings" component={Settings}/>
             <Route  path="/login" component={Login}/>
             <Route  path="/register" component={Register}/>
        </BrowserRouter>
    )
}

export default Routing;
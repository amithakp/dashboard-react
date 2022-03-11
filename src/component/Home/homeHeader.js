import React from 'react';
import {Link} from 'react-router-dom';
import './homeHeader.css';


const HomeHeader = () => {
    

    return(
        <>
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#myNavbar">
                            
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button> */}
                        <a className="navbar-brand" href="#">
                            yehilogo
                        </a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><span><Link to="/" className="btn btn-primary glyphicon glyphicon-user" id="help">How Can we Help</Link></span></li>
                        <li><span><Link to="/login" className="btn btn-primary glyphicon glyphicon-log-in" id="login">Log In</Link></span></li>
                    </ul>
                </div>
            </nav>
        </>
    )


    
    
}

export default HomeHeader;
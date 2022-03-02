import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <>
            <nav className="navbar navbar-inverse ">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/* <Link to="/" className="navbar-brand"> DashBoardHome</Link> */}
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/sales">Sales</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;
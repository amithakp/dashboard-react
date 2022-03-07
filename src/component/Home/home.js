import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <>        
            <center>
                <div id="loginButton">
                    <Link to="/login" className="btn btn-success btn-md">Login</Link> &nbsp;&nbsp;
                    {/* <Link to="/register" className="btn btn-warning btn-md">Sign Up</Link> */}
                </div>
                </center>
        </>
    )
}

export default Home;
import React from 'react';
import {Link} from 'react-router-dom';
import './HomeFirst.css';

const HomeFirst = () => {
    return(
        <>        
            <center>
                <div id="loginButton">
                    <Link to="/login" className="btn btn-success btn-md">Login</Link> &nbsp;&nbsp;
                    
                </div>
                </center>
        </>
    )
}

export default HomeFirst;
import React from 'react';
import {Link} from 'react-router-dom';

const DashBoardHome = () => {
    return(
        <>        
            <center>
                <h3>Employee Dashboard ..You Have to Login Or Sign Up Here</h3>
                <Link to="/login" className="btn btn-success btn-md">Login</Link> &nbsp;&nbsp;
                <Link to="/register" className="btn btn-warning btn-md">Sign Up</Link>
            </center>
        </>
    )
}

export default DashBoardHome;
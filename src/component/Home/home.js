import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <>        
            <center>
                <h3>Employee Dashboard ..You Have to Login Or Sign Up Here</h3>
                <Link to="/login" className="btn btn-success">Login</Link> &nbsp;&nbsp;
                <Link to="/register" className="btn btn-warning">Sign Up</Link>
            </center>
        </>
    )
}

export default Home;
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {withRouter} from 'react-router-dom';

const url="http://localhost:6000/apis/auth/userinfo"
class Header extends Component {
    constructor(props) {
        super()
        this.state = {
            userData :''
        }
    }
    handleLogout = () => {
        this.setState({userData:''})
        localStorage.removeItem('userData')
        localStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    // conditionalHeader = () => {
    //     if(this.state.userData.name){
    //         let data = this.state.userData;
    //         let outputArray = [data.name,data.email,data.phone,data.role]
    //         localStorage.setItem('userData',outputArray)
    //         return(
    //                 <>
    //                 <button onClick={this.handleLogout}  className="btn btn-success btn-md">Logout</button>
    //                 </>
    //         )
    //     }
    // }
    render() {
        return(
            <>
                <nav className="navbar navbar-inverse ">
                    <div className="logo">
                        YEHI LOGO
                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* <Link to="/" className="navbar-brand"> DashBoardHome</Link> */}
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        {/* <div>
                            <img src="/public/images/yehilogo.png" alt="yehi"/>
                        </div> */}
                        <ul className="nav navbar-nav">
                            <li><Link to="/dashBoard">Dashboard</Link></li>
                            <li><Link to="/consignment">Consignment</Link></li>
                            <li><Link to="/tracking">Tracking</Link></li>
                            <li><Link to="/carriers">Carriers</Link></li>
                            <li><Link to="/orderHistory">Order History</Link></li>
                            <li><Link to="/billingDetails">Billing Details</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            <li><button onClick={this.handleLogout}  className="btn btn-success btn-md">Logout</button></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }

    componentDidMount() {
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) =>res.json())
        .then((data) => {
            this.setState({userData: data})
        })
    }
}
   
export default withRouter(Header);
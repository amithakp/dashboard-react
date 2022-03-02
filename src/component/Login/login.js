import React,{Component} from 'react';
import './login.css';

const loginrUrl = "http://localhost:4000/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'amita@gmail.com',           
            password:'',
            message:''

        }
    }
    
    //login button
    handleSubmit = () => {
        fetch(loginrUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token});
            }else{
                localStorage.setItem('ltk',data.token)
                this.props.history.push('/Home')
            }
        })
    }

    //load form content onChanging
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                       <span id="login-span">Login</span>
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                            
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value={this.state.email} onChange ={this.handleChange}/>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password" 
                                            value={this.state.password} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button className="btn btn-success" onClick={this.handleSubmit}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;
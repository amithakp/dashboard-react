import React,{Component} from 'react';
import './login.css';

const loginrUrl = "https://login-out.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'amita@gmail.com',           
            password:'',
            message:''

        }
    }

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

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <>
                <div class="container-fluid">
                <br/>
                <div class="panel panel-success">
                    <div class="panel-heading">
                       <span>Login</span>
                    </div>
                    <div class="panel-body">
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
                                <button className="btn btn-success" onClick={this.handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;
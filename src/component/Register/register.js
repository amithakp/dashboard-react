import React,{Component} from 'react';
import './register.css';

const registerUrl = "http://localhost:6000/apis/auth/register";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            phone:'',
            email:'',           
            password:''
        }
    }

    // register button
    handleSubmit = () => {
        fetch(registerUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    //form content
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    
    render(){
        return(
            <>
                <div className="container">
                    <br/>
                    <div className="panel" id="panel-background">
                        <div className="panel-heading">
                           <span>Register</span>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" name="name" 
                                            value={this.state.name} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value={this.state.email} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" 
                                            value={this.state.phone} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password"
                                            value={this.state.password} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button className="btn btn-success" onClick={this.handleSubmit}>
                                        Register
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
export default Register;
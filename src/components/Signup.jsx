import React, {Component} from 'react';
import {firebaseApp} from './src/firebase.js';


class Signup extends Component{
    constructor(props){
        super(props);
            this.state={
                email:" ",
                password:" ",
                error:{
                    message:"" 
                }
            }
        
    }
    signUp(){
        console.log(this.state)
        const {email, password}=this.state;
        firebaseApp.auth().createUserEmailAndPassword(email,password)
            .catch(error=> {
              
                this.setState({error});
            })
        }
    
    render(){
        return(
            <div classname="form-inline">
                <h1>Signup</h1>
                <div classname="form-group">
                    <input classname= "form-control"
                    type ="text"
                    placeholder="Email"
                    onChange={event=>this.setState({email:event.target.value})}/>
                    
                    <input classname="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={event=>this.setState({password:event.target.value})}/>
                   

                    <button classname="btn btn-primary"
                    text="button"
                    onClick={()=>this.signUp()}
                    >Sign Up</button>
                    <div>{this.state.error.message}</div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Signup;
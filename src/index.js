import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route ,browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';




firebaseApp.auth().onAuthStateChanged (user => {
    if(user){
        console.log('user has successfully logined',user);
    }
    else{
        console.log('user need to log in or still doesnt log in');
    }  

} )


ReactDOM.render(
 
    <Router path='/' history={browserHistory} >
        <Route path='/app' component={App} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />


    </Router>,document.getElementById("root")
)
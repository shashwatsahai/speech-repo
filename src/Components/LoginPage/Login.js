import React from 'react';
//import Connection from '../../server/db/index'
import './Login.css'
function Login(props) {
   
    return (
        <div className='head'>
        <div className='title'>Sign In</div>
        <div>Username  : <input type='text' id='username'></input></div>
        <div style={{position:"relative",left:"2.5px"}}>Password  : <input type='password' id='password'></input></div>
        <div className='warn'>{props.warn}</div>
        <div><button className='signin' onClick={props.onClick}>Sign In</button></div>
        </div>
    )
}

export default Login;
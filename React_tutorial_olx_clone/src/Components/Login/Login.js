import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Firebase';
import Logo from '../../olx-logo.png';

import './Login.css';
import { useHistory,Link } from 'react-router-dom';

function Login() {
 
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
  const handleLogin=(e)=>{
     e.preventDefault()
     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
       history.push('/')
     }).catch((error)=>{
       alert(error.message)
     })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        
        <div className='element'>
        <button>     
          <Link to='signup'>Signup</Link>
          </button>
        </div>
          
        
        {/* <a>Signup</a> */}
      </div>
    </div>
  );
}

export default Login;

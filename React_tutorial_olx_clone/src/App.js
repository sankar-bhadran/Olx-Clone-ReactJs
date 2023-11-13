import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import LoginPage from './Pages/Login';
import Create from './Components/Create/Create';
import Post from './store/PostContext' 
import View from './Pages/ViewPost'
import { useEffect,useContext } from 'react';
import './App.css';
import { AuthContext, FirebaseContext } from './store/Firebase';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
const {setUser}=useContext(AuthContext)
const {firebase}=useContext(FirebaseContext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})


  return (
    <div>
      <Post>

      <Router>
       <Route exact path='/'><Home /></Route>
       <Route path='/signup'><Signup/></Route>
       <Route path='/login'><LoginPage/></Route>
       <Route path='/Create'><Create/></Route>
       <Route path='/view'><View/></Route>
      </Router>
   
      </Post>
   
   
     
    </div>
  );
}

export default App;

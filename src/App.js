import React, { Component } from 'react';
import 'react-dom'
import './App.css';
import Login from './Components/LoginPage/Login'
import SpeechRepo from './Components/SpeechRepo/SpeechRepo'


class App extends Component{
  
  
  state = {
    loggedIn:false,
    id:"",
    password:"",
    warn:""
  };
 
  // constructor(props){
  //   super(props);
  //  this.state={ loggedIn: false,id:'',pass:'' }
  // }
  onClickHandler = () => {
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
      var ids=JSON.parse(xhr.responseText);
      window.ids=ids;
      for(var id_i in ids){
        console.log(ids[id_i])
        if(ids[id_i]['id']==document.getElementById('username').value&&ids[id_i]['pass']==document.getElementById('password').value){
          var id = document.getElementById('username').value;
          var pass = document.getElementById('password').value;    
          this.setState({
            id:id,
            password:pass,
            loggedIn:true
          }) 
        }
        else {
          this.setState({
            warn:"Incorrect Id or Password"
          })
        }
      }
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://localhost:8080/Users/')
    // send the request
    xhr.send();
  
   
   // console.log
    
  };
        
  
  render (){    
    console.log(this.state)
    var retVal;
    if(this.state.loggedIn==false){
      retVal = (
        <div className="App">
          <Login onClick={this.onClickHandler} warn={this.state.warn}></Login>
        </div>
      )
    }
    else{
      retVal = (
        <div className="App">
        <SpeechRepo></SpeechRepo>
        </div>
      )
    }
    return retVal;
  }
    
}

export default App;

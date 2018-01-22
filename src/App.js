import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import SockJS from 'sockjs-client';

class App extends Component {
  constructor(props){
    super(props);
    var sock = new SockJS('http://localhost:9999/echo');
     sock.onopen = () => {
         console.log('open');
     };
     let self = this;
     sock.onmessage = (e) => {
         console.log('message', e.data);
         self.setState({message : [...self.state.message,e.data]});
     };

     sock.onclose = () => {
         console.log('close');
     };
     this.state = {
      actions:sock,
      message:[]
     }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chat { ...this.state }/>
      </div>
    );
  }
}

export default App;

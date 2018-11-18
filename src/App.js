import React, { Component } from 'react';
import Header from './componentes/Header';
import Dog from './componentes/Dog';

// import logo from './logo.svg';
import './App.css';
// import Clicker from './componentes/Clicker';

class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'React Clicker'
    };
  }
  render() {
    return (
      <div className="App">
         <Header title ={this.state.title} /> 
        <div className="container">
          <div className="row">
             <div className="col-4">
               <Dog />
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm Anny Gutierrez, this webpage is in dev :(
          </p>
          <p>You can read more about me <a
            className="App-link"
            href="https://www.linkedin.com/in/annygutierrez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a></p>
          <a 
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://qhapaqnan.cultura.pe/noticias/proyecto-qhapaq-%C3%B1-premia-escolares-de-cieneguilla"
          >
          About my awardin the Qhapaq Ñan drawing contest
          </a>
        </header>
      </div>
    );
  }
}

export default App;

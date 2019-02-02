import React, { Component } from 'react';
import './App.css';
import Game from "./Component/Grille/grille";
import Square from "./Component/Grille/grille";

class App extends Component {
  render() {
    return (
      <div>
        <Game/>
      </div>
    );
  }
}

export default App;

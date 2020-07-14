import React, { Component } from "react";
import GuessedWords from "./components/game/GuessedWords";
import Counter from "./components/Counter";
import Congrats from "./components/game/Congrats";
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <Counter />
          <h2>Guess word game</h2>
          <Congrats success={true}/>
          <GuessedWords guessWords={[ { guessWord: "train", letterMatchCount: 3 },
      { guessWord: "brain", letterMatchCount: 3 },
      { guessWord: "party", letterMatchCount: 5 },]}/>
        </header>
      </div>
    );
  }
}

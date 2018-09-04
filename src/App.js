import React, { Component } from 'react';

import Button from './components/Button/Button';
import Form from './components/Form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      standardNum: "",
      expertNum: "",
      level: "",
      guess: "",
      message: "",
      numOfGuesses: 1,
      array: {
        standardHigh: [],
        expertHigh: []
      },
      show: true
    }
  }
  

  standardRandom = () => {
    let standardNum = Math.floor(Math.random() * 10) + 1;
    this.setState({
      standardNum: standardNum,
      numOfGuesses: 1,
      message: "",
      show: false,
      level: "standard"
    });
    console.log(standardNum)
  }

  expertRandom = () => {
    let expertNum = Math.floor(Math.random() * 100) + 1;
    this.setState({
      expertNum: expertNum,
      numOfGuesses: 1,
      message: "",
      show: false,
      level: "expert"
    })
    console.log(expertNum)
  }

  compareNums = () => {


    if (this.state.level === "standard") {
      if (Number(this.state.guess) === this.state.standardNum) {
        this.state.array.standardHigh.unshift(this.state.numOfGuesses);
        return this.setState({
          message: `Congrats, it took you ${this.state.numOfGuesses} tries.`,
          standardHigh: Math.min(...this.state.array.standardHigh)
      })
    } else {
      if (Number(this.state.guess) < this.state.standardNum) {
        return this.setState({
          message: "Guess higher",
          numOfGuesses: this.state.numOfGuesses +1
        });
      } else if (Number(this.state.guess) > this.state.standardNum) {
        return this.setState({
          message: "Guess lower",
          numOfGuesses: this.state.numOfGuesses +1
      });
    }
  }
}

  if (this.state.level === "expert") {
    if (Number(this.state.guess) === this.state.expertNum) {
      this.state.array.expertHigh.unshift(this.state.numOfGuesses);
      return this.setState({
        message: `Congrats, it took you ${this.state.numOfGuesses} tries.`,
        expertHigh: Math.min(...this.state.array.expertHigh)
      })
    } else {
      if (Number(this.state.guess) < this.state.expertNum) {
        return this.setState({
          message: "Guess higher",
          numOfGuesses: this.state.numOfGuesses +1
        });
      } else if (Number(this.state.guess) > this.state.expertNum) {
        return this.setState({
          message: "Guess lower",
          numOfGuesses: this.state.numOfGuesses +1
        });
      }
    }
  }
}

  inputGuess = (e) => {
    let userGuess = document.getElementById('input').value;
    e.preventDefault();

    this.setState({
      guess: userGuess
    }, () => {this.compareNums()}
    )
  }  

  resetGame = () => {
    this.setState({
      standardNum: "",
      expertNum: "",
      level: "",
      guess: "",
      message: "",
      numOfGuesses: '',
    
        standardHigh: '',
        expertHigh: '',
     
      show: true
    })
  }

  
  render() {
    return (
      <div className="App">
          <h1>Start Game</h1>
          <p>Instructions: Select difficulty. Standard is 1-10. Expert is 1-100.</p>
        <Button 
        standardClicked={this.standardRandom}
        expertClicked={this.expertRandom}/>
        <Form show={this.state.show} inputGuess={this.inputGuess} resetGame={this.resetGame}/>
        <p>{this.state.message}</p>
        <p>Attempt: {this.state.numOfGuesses}</p>
        <p>Your standard highscore: {this.state.standardHigh}</p>
        <p>Your expert highscore: {this.state.expertHigh}</p>
      </div>
    );
  }
}

export default App;

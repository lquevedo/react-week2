import React, { Component } from 'react';

import Button from './components/Button/Button';
import Form from './components/Form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      standardRandom: 0,
      expertRandom: 0
    }
  }

  standardRandom = () => {
    let standardNum = Math.floor(Math.random() * 10) + 1;
    this.setState({
      standardRandom: standardNum
    });
    return (console.log(standardNum))
  }

  expertRandom = () => {
    let expertNum = Math.floor(Math.random() * 100) + 1;
    this.setState({
      expertRandom: expertNum
    })
    return (console.log(expertNum))
  }

  compareNums = (e) => {
    e.preventDefault();
    console.log(input);
  }

  render() {
    return (
      
      <div className="App">
          <h1>Start Game</h1>
        <Button 
        standardClicked={this.standardRandom}
        expertClicked={this.expertRandom}/>
        <Form compareNums={this.compareNums}/>
      </div>
    );
  }
}

export default App;

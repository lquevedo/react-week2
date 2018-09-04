import React from 'react';
import './Form.css';

const form = (props) => {
    return(
        <form hidden={props.show} name="Form" onSubmit = {props.inputGuess}>
            <input className="inputfield" type="text" id="input" placeholder="Guess here"/>
            <input className="inputbutton" type="submit"/>
            <button onClick={props.resetGame}>reset</button>
        </form>
        
    )
}


export default form;
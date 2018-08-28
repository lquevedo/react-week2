import React from 'react';
import './Button.css'

const button = (props) => {
    return (
    <div className= "Buttons">
        <button onClick={props.standardClicked}>Standard</button>
        <button onClick={props.expertClicked}>Expert</button>
    </div>
    );
}

export default button;
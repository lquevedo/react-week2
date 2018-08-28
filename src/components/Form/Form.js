import React from 'react';
import './Form.css';

const form = (props) => {
    return(
        <form className="Form">
            <label>
                Name:
                <input type="text" id="forms" name="name" />
            </label>
            <input onClick={props.compareNums} type="submit" value="Submit" />
        </form>
    )
}


export default form;
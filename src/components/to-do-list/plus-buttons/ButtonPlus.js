import React from 'react';
import './buttonplus.css';

const ButtonPlus = ({ nameButton, placeholder }) => {
    return (
        <form className="plus-button">
            <input 
                className="plus-button__input"
                placeholder={ placeholder }
            />
            <button className="plus-button__button">{ nameButton }</button>
        </form>
    )
}

export default ButtonPlus

import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import Comments from './Comments';
import './form.css';
import userTwo from '../../../images/user-two.jpg';
import userFour from '../../../images/user-four.jpg';
import userSeven from '../../../images/user-seven.jpg';

const Form = () => {
    return (
        <form className="td--form">
            <div className="td--form__icon">
                <VscChromeClose className="close-icon"/>
            </div>
            <input 
                className="td--form__input"
                placeholder="What are you looking for"
            />
            <label className="title">description</label>
            <textarea 
                className="td--form__textarea-description"
                placeholder="Type description here..."
            />
            <div className="td--form__words">
                <p>Hom</p>
                <p>Hacer</p>
                <p>Nov</p>
            </div>
            <label className="title">comments</label>
            <ul className="td--form__users">
                <Comments image={userTwo} comment="Lorem Ipsum is simply summy text of the"/>
                <Comments image={userFour} comment="Lorem Ipsum is simply summy text of the"/>
                <Comments image={userSeven} comment="Lorem Ipsum is simply summy text of the"/>
            </ul>

            <textarea 
                className="td--form__textarea-commit"
                placeholder="Type comment here..."
            />
        </form>
    )
}

export default Form

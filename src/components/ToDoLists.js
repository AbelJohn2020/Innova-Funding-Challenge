import React from 'react'
import { CgHomeAlt } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import Header from './Header';
import '../styles/todolists.css';
import '../styles/addboardtolist.css';
import userOne from '../images/user-one.jpg';
import userTwo from '../images/user-two.jpg';
import userThree from '../images/user-three.jpg';
import userFour from '../images/user-four.jpg';
import userFive from '../images/user-five.jpg';
import userSix from '../images/user-six.jpg';
import userSeven from '../images/user-seven.jpg';


const ToDoLists = () => {
    const iconHome = <CgHomeAlt className="icon-home"/>;
    const goHome = <button className="button-home">{iconHome}</button>;
    return (
        <div>
            <Header home={goHome} />
            <input 
                className="title-todo"
                placeholder="Todo for today"
            />
            <div className="todo-invite-user">
                <button className="todo-invite-user__plus">
                    <CgMathPlus className="todo-invite-user__plus--icon"/>
                </button>
                <img className="img-footer--user border-user" src={userOne} alt="Woman user"/>
                <img className="img-footer--user border-user" src={userTwo} alt="Woman user"/>
                <img className="img-footer--user border-user" src={userThree} alt="Woman user"/>
                <img className="img-footer--user border-user" src={userFour} alt="Woman user"/>
                <img className="img-footer--user border-user" src={userFive} alt="Man user"/>
                <img className="img-footer--user border-user" src={userSix} alt="Man user"/>
                <img className="img-footer--user border-user" src={userSeven} alt="Man user"/>

            </div>

            <div className="todo-list">
                <button className="todo-list__plus">
                    <CgMathPlus className="todo-list__plus--icon"/>
                </button>   

            </div>
        </div>
    )
}

export default ToDoLists

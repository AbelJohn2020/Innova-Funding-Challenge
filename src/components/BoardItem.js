// import React, { useState } from 'react';
import React from 'react';
import '../styles/boardItem.css';
import userTwo from '../images/user-two.jpg';
import userFour from '../images/user-four.jpg';
import userseven from '../images/user-seven.jpg';
import { VscChromeClose } from "react-icons/vsc";
// import ToDoLists from './ToDoLists';

const BoardItem = ({itemId, closeBoard, isTodoOpen, setIsTodoOpen}) => {
    // const [goToPage, setGoToPage] = useState(false);

    return (
        <div className="board">
            <div className="board--header">
                <button onClick={() => closeBoard(itemId)} className="board--header__button">
                    <VscChromeClose className="board--header__button--icon"/>
                </button>
            </div>
            <div className="board--body" onClick={() => setIsTodoOpen(!isTodoOpen)}>
                <h1 className="board__todo">Todo for today</h1>    

                <div className="img-footer">
                    <img className="img-footer--user" src={userTwo} alt="Woman user"/>
                    <img className="img-footer--user" src={userFour} alt="Woman user"/>
                    <img className="img-footer--user" src={userseven} alt="Man user"/>
                </div>
            </div>
        </div>
    )
}

export default BoardItem

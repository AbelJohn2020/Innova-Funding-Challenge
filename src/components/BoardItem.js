import React from 'react';
import '../styles/boardItem.css';
import userTwo from '../images/user-two.jpg';
import userFour from '../images/user-four.jpg';
import userseven from '../images/user-seven.jpg';
import { VscChromeClose } from "react-icons/vsc";

const BoardItem = ({
    itemId, 
    closeBoard,
    isTodoOpen, 
    setIsTodoOpen,
    setSelectedTodo
    }) => {

    return (
        <div className="board" onClick={() => setSelectedTodo(itemId)}>
            <div className="board--header">
                <button 
                    className="board--header__button" 
                    onClick={() => {closeBoard(itemId)}}
                >
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

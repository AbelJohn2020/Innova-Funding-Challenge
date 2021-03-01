import React from 'react';
import './boardItem.css';
import { useHistory } from "react-router-dom";
import userTwo from '../../images/user-two.jpg';
import userFour from '../../images/user-four.jpg';
import userseven from '../../images/user-seven.jpg';
import { VscChromeClose } from "react-icons/vsc";

const usersList = [
    {
        id: 'user_1',
        alt: 'Man user image',
        className: 'img-footer--user',
        image: userTwo
    },
    {
        id: 'user_2',
        alt: 'Woman user image',
        className: 'img-footer--user',
        image: userFour
    },
    {
        id: 'user_3',
        alt: 'Woman user image',
        className: 'img-footer--user',
        image: userseven
    },
];

const BoardItem = ({
    itemId, 
    closeBoard,
    isTodoOpen, 
    setIsTodoOpen,
    setSelectedTodo
    }) => {
    let history = useHistory();
    return (
        <div className="board" onClick={() => {
            setSelectedTodo(itemId);
            history.push(`/tasks/${itemId}`)
        }}>
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
                    {usersList.map(user => (
                         <img key={user.id} className={user.className} src={user.image} alt={user.alt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoardItem

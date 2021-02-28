import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import userTwo from '../../images/user-two.jpg';
import userFour from '../../images/user-four.jpg';
import userseven from '../../images/user-seven.jpg';

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


const OtherBoard = ({title}) => {
    return (
        <div className="board">
            <div className="board--header">
                <VscChromeClose className="board--header__button--icon"/>
            </div>
            <div className="board--body">
                <h1 className="board__todo">{title}</h1>    
                <div className="img-footer">
                    {usersList.map(user => (
                        <img key={user.id} className={user.className} src={user.image} alt={user.alt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OtherBoard

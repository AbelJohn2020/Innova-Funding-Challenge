import React from 'react';
import { useHistory } from "react-router-dom";
import userTwo from '../../images/user-two.jpg';
import userFour from '../../images/user-four.jpg';
import userseven from '../../images/user-seven.jpg';
import { VscChromeClose } from "react-icons/vsc";
import styles from './BoardItem.module.css';

const usersList = [
    {
        id: 'user_1',
        alt: 'Man user image',
        image: userTwo
    },
    {
        id: 'user_2',
        alt: 'Woman user image',
        image: userFour
    },
    {
        id: 'user_3',
        alt: 'Woman user image',
        image: userseven
    },
];

const BoardItem = ({
    itemId, 
    closeBoard,
    isTodoOpen, 
    setIsTodoOpen,
    setSelectedTodo,
    }) => {
    let history = useHistory();
    return (
        <div className={styles.Board}>
            <div className={styles.BoardHeader}>
                <button 
                    className={styles.BoardHeaderButton} 
                    onClick={() => closeBoard(itemId)} >
                    <VscChromeClose className={styles.BoardHeaderButtonIcon} />
                </button>
            </div>
            <div 
                className={styles.BoardBody} 
                onClick={() => {
                    setSelectedTodo(itemId);
                    history.push(`/tasks/${itemId}`);
                    setIsTodoOpen(!isTodoOpen);
                }
            }>
                <h1 className={styles.BoardTodo}>Todo for today</h1>    
                <div className={styles.ImgFooter}>
                    {usersList.map(user => (
                         <img key={user.id} className={styles.ImgFooterUser} src={user.image} alt={user.alt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoardItem;

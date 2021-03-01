import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import userTwo from '../../images/user-two.jpg';
import userFour from '../../images/user-four.jpg';
import userseven from '../../images/user-seven.jpg';
import styles from '../BoardItem/BoardItem.module.css';

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

const OtherBoard = ({title}) => {
    return (
        <div className={styles.Board}>
            <div className={styles.BoardHeader}>
                <VscChromeClose className={styles.BoardHeaderButtonIcon}/>
            </div>
            <div className={styles.BoardBody}>
                <h1 className={styles.BoardTodo}>{title}</h1>    
                <div className={styles.ImgFooter}>
                    {usersList.map(user => (
                        <img key={user.id} className={styles.ImgFooterUser} src={user.image} alt={user.alt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OtherBoard

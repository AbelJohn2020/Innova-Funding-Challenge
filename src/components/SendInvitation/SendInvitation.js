import React from 'react';
import styles from '../CreateBoard/CreateBoard.module.css';

const SendInvitation = ({
    placeholder,
    nameButton,
    sendInvitation,
    setSendInvitation,
}) => {
    return (
        <div className={styles.Plus}>
            <div className={styles.PlusPlus}>
                <form className={styles.PlusButton}>
                    <input 
                        type="text"
                        className={styles.PlusButtonInput}
                        placeholder={placeholder}
                    />
                </form>
                    <button
                        className={styles.PlusButtonButton}
                        onClick={() => setSendInvitation(!sendInvitation)}
                    >
                        {nameButton} 
                    </button>
            </div>
            <div 
                className={styles.EmptySpace} 
                onClick={() => setSendInvitation(!sendInvitation)}
            />
        </div>
    )
}

export default SendInvitation

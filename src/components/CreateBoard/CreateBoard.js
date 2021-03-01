import React, { useState } from 'react';
import styles from './CreateBoard.module.css';

const CreateBoard = ({ 
    nameButton, 
    placeholder, 
    sendTodo, 
    setSendTodo, 
    boardsList,
    setBoardsList,
    selectedTodo,
    createList, 
    setCreateList,
}) => {
    const boardListTasks = boardsList[selectedTodo];
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);

    const handleChange = e => {
        setInputValue(e.target.value);
        setShowError(false);
    };

    const handleSubmit = () => {
        const newTaskLists = {...boardListTasks, 
            taskList: 
            [...boardListTasks.taskList, {
                id: boardListTasks.taskList.length,
                name: inputValue,
            }],
        };

        if (inputValue) {
            setBoardsList([newTaskLists]);
            setInputValue('');
            setSendTodo(!sendTodo);
        } else {
            setShowError(true);
            setCreateList(createList);
        }
    };

    return (
        <div className={styles.Plus}>
            <div className={showError ? styles.PlusWithError : styles.PlusPlus}>
                <form className={styles.PlusButton}>
                    <input 
                        type="text"
                        className={styles.PlusButtonInput}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => handleChange(e)}
                    />
                </form>
                {showError && 
                    <div className={styles.BoxShowError}>
                        <p className={styles.BoxShowErrorMessage}>This field cannot be empty</p> *
                    </div>
                }
                    <button
                        className={styles.PlusButtonButton} 
                        onClick={() => {
                            setCreateList(!createList);
                            handleSubmit();
                        }}
                    >
                        {nameButton} 
                    </button>
            </div>
            <div className={styles.EmptySpace} onClick={() => setCreateList(!createList)} />
        </div>
    )
}



export default CreateBoard

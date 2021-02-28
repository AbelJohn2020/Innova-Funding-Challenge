import React, { useState } from 'react';
import './buttonplus.css';

const ButtonPlus = ({ 
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

    const [inputValue, setInputValue] = useState('');
    const boardListTasks = boardsList[selectedTodo];
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
            setShowError(true)
            setCreateList(createList)
        }
    };

    return (
        <div className="plus">
            <div className={showError ? "plus-whit-error" : "plus-plus"}>
                <form className="plus-button">
                    <input 
                        type="text"
                        className="plus-button__input"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => handleChange(e)}
                    />
                </form>
                {showError && 
                    <div className="box-show-error">
                        <p className="box-show-error__message">This field cannot be empty</p> *
                    </div>
                }
                    <button
                        className="plus-button__button" 
                        onClick={() => {
                            setCreateList(!createList)
                            handleSubmit()
                        }}
                    >
                        {nameButton} 
                    </button>
            </div>
            <div className="empty-space" onClick={() => setCreateList(!createList)}>

            </div>
        </div>
    )
}



export default ButtonPlus

import React, { useState, useEffect } from 'react';
import './buttonplus.css';

const ButtonPlus = ({ 
    nameButton, 
    placeholder, 
    sendTodo, 
    setSendTodo, 
    boardsList,
    setBoardsList,
    selectedTodo,
}) => {

    const [inputValue, setInputValue] = useState('');
    const boardListTasks = boardsList[selectedTodo];


    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        const newTaskLists = {...boardListTasks, 
            taskList: 
            [...boardListTasks.taskList, {
                id: boardListTasks.taskList.length,
                name: inputValue,
            }],
        };
        setBoardsList([newTaskLists]);
        setInputValue('');
        setSendTodo(!sendTodo);
    };

    return (
        <div>
            <div className="plus-plus">
                <form className="plus-button">
                    <input 
                        type="text"
                        className="plus-button__input"
                        placeholder={ placeholder }
                        value={inputValue}
                        onChange={(e) => handleChange(e)}
                    />
                </form>
                    <button
                        className="plus-button__button" 
                        onClick={() => handleSubmit()}
                    >
                        {nameButton} 
                    </button>
            </div>
        </div>
    )
}



export default ButtonPlus

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

    console.log(createList)
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
        <div className="plus">
            <div className="plus-plus">
                <form className="plus-button">
                    <input 
                        type="text"
                        className="plus-button__input"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => handleChange(e)}
                    />
                </form>
                    <button
                        className="plus-button__button" 
                        onClick={() => {
                            handleSubmit();
                            setCreateList(!createList)
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

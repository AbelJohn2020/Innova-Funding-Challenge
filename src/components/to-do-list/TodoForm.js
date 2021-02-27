import React, { useState } from 'react';
import { CgMathPlus } from "react-icons/cg";
import './todoform.css';

const TodoForm = ({todos, onSubmit}) => {
    const [inputText, setInputText] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [send, setSend] = useState(true);

    const handleChange = e => {
        setInputText(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            id: todos.length,
            text: inputText,
            description: '',
            comments: [],
        })
        setInputText('');
    };

    return (
            <form className={isDisabled ? "todo-form-plus-button" : "todo-form"} onSubmit={e => handleSubmit(e)}>
                <CgMathPlus className="todo-icon" onClick={() => setIsDisabled(!isDisabled)}/>
                {
                    isDisabled 
                    ?   <input 
                            type="text"
                            placeholder="Add new Card"
                            className="todo-input"
                            value={inputText}
                            onChange={handleChange}
                        />
                    :   <input 
                            type="text"
                            placeholder="Add new Card"
                            className="todo-input"
                            value={inputText}
                            onChange={handleChange}
                            disabled
                        />
                }
                {
                    isDisabled && <button className="todo-button" onClick={() => {setSend(!send)}}>Send</button>
                }
            </form>
    )
}

export default TodoForm

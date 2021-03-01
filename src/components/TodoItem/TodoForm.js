import React, { useState } from 'react';
import { CgMathPlus } from "react-icons/cg";
import './Todoform.css';

const TodoForm = ({todos, onSubmit}) => {
    const [inputText, setInputText] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [send, setSend] = useState(true);
    const [showError, setShowError] = useState(false);

    const handleChange = e => {
        setInputText(e.target.value)
        setShowError(false)
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if (inputText) {
            onSubmit({
                id: todos.length,
                text: inputText,
                description: '',
                comments: [],
            })
            setInputText('');
            setSend(!send);
        } else {
            setShowError(true);
            setSend(send);
        }
    };

    return (
        <div>
            {showError && <div className="box-show-error">
                <p className="box-show-error__message">This field cannot be empty</p> *
            </div>}
            <form className={isDisabled ? "todo-form-plus-button" : "todo-form"}>
                <CgMathPlus className="todo-icon" onClick={() => setIsDisabled(!isDisabled)}/>
                {
                    isDisabled 
                    ?   <input 
                            type="text"
                            placeholder="Add new Card"
                            className="todo-input"
                            value={inputText}
                            onChange={(e) => handleChange(e)}
                        />
                    :   <input 
                            type="text"
                            placeholder="Add new Card"
                            className="todo-input"
                            disabled
                        />
                }
                {
                    isDisabled && <button className="todo-button" onClick={(e) => {handleSubmit(e)}}>Send</button>
                }
            </form>
        </div>
    )
}

export default TodoForm

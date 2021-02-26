import React, { useState } from 'react';
import { CgMathPlus } from "react-icons/cg";
import './todoform.css';

const TodoForm = (props) => {
    const [input, setInput] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const [send, setSend] = useState(true)
    const [getItem, setGetItem] = useState([])

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: getItem.length,
            text: input,
        })

        setGetItem([]);
        console.log('todoForm', getItem);
        // props.onSubmit({
        //     id: Math.floor(Math.random() * 1000),
        //     text: input,
        // })

        // setInput('');
    }
    return (
            <form className="todo-form" onSubmit={handleSubmit}>
                <CgMathPlus className="todo-icon" onClick={() => setIsDisabled(!isDisabled)}/>
                <input 
                    type="text"
                    placeholder="Add new Card"
                    className="todo-input"
                    value={input}
                    onChange={handleChange}
                />
                {
                    isDisabled && <button className={send ? "todo-button" : "dissabled-button"} onClick={() => {setSend(!send)}}>Send</button>
                }
            </form>
    )
}

export default TodoForm

import React, { useState } from 'react';
import { CgMathPlus } from "react-icons/cg";

const TodoForm = () => {
    const [input, setInput] = useState('')
    const [enable, setEnable] = useState(false)

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
            <form className="todo-form" onSubmit={handleSubmit}>
                <CgMathPlus/>
                <input 
                    type="text"
                    placeholder="Add new Card"
                    className="todo-input"
                    value={input}
                    onChange={handleChange}
                />
                <button className="todo-button">Send</button>
            </form>
    )
}

export default TodoForm

import React, { useState } from 'react';
import { CgMathPlus } from "react-icons/cg";
import styles from './Todoform.module.css';

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
            {showError && <div className={styles.BoxShowError}>
                <p className={styles.BoxShowErrorMessage}>This field cannot be empty</p> *
            </div>}
            <form className={isDisabled ? styles.TodoFormPlusButton : styles.TodoForm}>
                <CgMathPlus className={styles.TodoIcon} onClick={() => setIsDisabled(!isDisabled)}/>
                {
                    isDisabled 
                    ?   <input 
                            type="text"
                            placeholder="Add new Card"
                            className={styles.TodoInput}
                            value={inputText}
                            onChange={(e) => handleChange(e)}
                        />
                    :   <input 
                            type="text"
                            placeholder="Add new Card"
                            className={styles.TodoInput}
                            disabled
                        />
                }
                {isDisabled && (
                <button className={styles.TodoButton} onClick={(e) => {handleSubmit(e)}}>Send</button>
                )}
            </form>
        </div>
    )
}

export default TodoForm

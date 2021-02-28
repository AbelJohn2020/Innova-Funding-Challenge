import React, {useState} from 'react';
import { VscChromeClose } from "react-icons/vsc";
import Comments from './Comments';
import './form.css';
import userTwo from '../../../images/user-two.jpg';
import userFour from '../../../images/user-four.jpg';
import userSeven from '../../../images/user-seven.jpg';

const getUsers = [
    {
        id: 1,
        image: userTwo,
        alt: 'User Profile',
        comment: 'Lorem Ipsum is simply summy text of the',
    },
    {
        id: 2,
        image: userFour,
        alt: 'User Profile',
        comment: 'Lorem Ipsum is simply summy text of the',
    },
    {
        id: 3,
        image: userSeven,
        alt: 'User Profile',
        comment: 'Lorem Ipsum is simply summy text of the',
    },
]

const Form = ({ 
    todos,
    setTodos, 
    callForm, 
    setCallForm, 
    selectedTask,
}) => {

    const todoItemSelected = todos[selectedTask];
    const {text, description, comments} = todoItemSelected;
    const [todoItem, setTodoItem] = useState({
        id: null,
        text: text,
        description: description,
        comment: '',
    });
    
    const handleChange = (e) => {
        setTodoItem({...todoItem, [e.target.name]: e.target.value });
        const modifiedList = todos.map(todo => {
            if (todo.id === todoItemSelected.id) {
                todo.text = todoItem.text;
                todo.description = todoItem.description;
            }
            return todo;
        });
        setTodos(modifiedList);
    };

    const handleChangeComment = (e) => {
        setTodoItem([...comments, e.target.value]);
    };

    // const onSubmitComment = () => {
    //     const newCommentsLists = {...todoItemSelected, 
    //         comments: [...todoItemSelected.comments, {
    //             id: todoItemSelected.comments.length,
    //             name: todoItem.comment,
    //         }]};
    //     setTodos([newCommentsLists]);
    //     setTodoItem({...todoItem, comment: ''});
    //     console.log('onSubmitComment', newCommentsLists);
    //     // const newCommentsLists = {...todos,
    //     // todos: [...]}
    //     // setTodos.filter(todo => todo.id === todoItemSelected.id);
    // };

    console.log({
        todoItem: todoItem,
        updatedTodoSelected: todoItemSelected
    });

    return (
        <form className="td--form">
            <div className="td--form__icon">
                <VscChromeClose className="close-icon" onClick={() => {setCallForm(!callForm)}}/>
            </div>
            <input
                name='text'
                value={todoItem.text}
                className="td--form__input"
                placeholder="What are you looking for"
                onChange={(e) => handleChange(e)}
            />
            <label className="title">description</label>
            <textarea
                name='description'
                value={todoItem.description}
                className="td--form__textarea-description"
                placeholder="Type description here..."
                onChange={(e) => handleChange(e)}
            />
            <div className="td--form__words">
                <p>Hom</p>
                <p>Hacer</p>
                <p>Nov</p>
            </div>
            <label className="title">comments</label>
            <ul className="td--form__users">
                {getUsers.map(user => (
                        <Comments 
                            key={user.id}
                            image={user.image}
                            alt={user.alt}
                            comment={user.comment}
                        />
                ))}
            </ul>

            <textarea
                name='comment'
                value={todoItem.comment}
                className="td--form__textarea-commit"
                placeholder="Type comment here..."
                onChange={(e) => handleChangeComment(e)}
                // onSubmit={(e) => onSubmitComment(e)}
            />
        </form>
    )
}

export default Form

import React, {useState} from 'react';
import { VscChromeClose } from "react-icons/vsc";
import CommentList from '../CommentList/CommentList';
import userTwo from '../../images/user-two.jpg';
import userFour from '../../images/user-four.jpg';
import userSeven from '../../images/user-seven.jpg';
import './TaskItem.css';

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
];

const TaskItem = ({ 
    todos,
    setTodos, 
    callForm, 
    setCallForm, 
    selectedTask,
}) => {
    const todoItemSelected = todos[selectedTask];
    const {text, description, comments} = todoItemSelected;
    const [taskItems, setTaskItems] = useState({
        id: null,
        text: text,
        description: description,
        comment: '',
    });
    
    const handleChange = (e) => {
        setTaskItems({...taskItems, [e.target.name]: e.target.value });
        const modifiedList = todos.map(todo => {
            if (todo.id === todoItemSelected.id) {
                todo.text = taskItems.text;
                todo.description = taskItems.description;
            }
            return todo;
        });
        setTodos(modifiedList);
    };

    const handleChangeComment = (e) => {
        setTaskItems([...comments, e.target.value]);
    };

    return (
        <form className="td--form">
            <div className="td--form__icon">
                <VscChromeClose className="close-icon" onClick={() => {setCallForm(!callForm)}}/>
            </div>
            <input
                name='text'
                value={taskItems.text}
                className="td--form__input"
                placeholder="What are you looking for"
                onChange={(e) => handleChange(e)}
            />
            <label className="title">description</label>
            <textarea
                name='description'
                value={taskItems.description}
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
                            <CommentList 
                            key={user.id}
                            image={user.image}
                            alt={user.alt}
                            comment={user.comment}
                        />
                ))}
            </ul>
            <textarea
                name='comment'
                value={taskItems.comment}
                className="td--form__textarea-commit"
                placeholder="Type comment here..."
                onChange={(e) => handleChangeComment(e)}
            />
        </form>
    )
}

export default TaskItem

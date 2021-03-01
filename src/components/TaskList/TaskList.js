import React, { useState } from 'react'
import { CgMathPlus } from "react-icons/cg";
import Header from '../Header/Header';
import userOne from '../../images/user-one.jpg';
import userTwo from '../../images/user-two.jpg';
import userThree from '../../images/user-three.jpg';
import userFour from '../../images/user-four.jpg';
import userFive from '../../images/user-five.jpg';
import userSix from '../../images/user-six.jpg';
import userSeven from '../../images/user-seven.jpg';
import CreateBoard from '../CreateBoard/CreateBoard';
import Logout from '../Logout/Logout';
import TodoList from '../TodoList/TodoList';
import SendInvitation from '../SendInvitation/SendInvitation';
import '../BoardItem/BoardItem.css';
import './Taskslist.css';

const guestsList = [
    {
        id: 1,
        image: userOne,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
    {
        id: 2,
        image: userTwo,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
    {
        id: 3,
        image: userThree,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
    {
        id: 4,
        image: userFour,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
    {
        id: 5,
        image: userFive,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
    {
        id: 6,
        image: userSix,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
    {
        id: 7,
        image: userSeven,
        alt: 'User profile',
        className: 'img-footer--user border-user'
    },
];

const TaskList = ({
    boardsList, 
    setBoardsList, 
    selectedTodo,
    isTodoOpen,
    setIsTodoOpen,
    logout,
    setLogout,
}) => {
    const [sendInvitation, setSendInvitation] = useState(false);
    const [createList, setCreateList] = useState(false);
    const [sendTodo, setSendTodo] = useState(false);

    return (
        <div>   
            <div className="todo-lists-container">
                {sendInvitation  && 
                    <SendInvitation
                        placeholder="yefrioscar9814@gmail.com" 
                        nameButton="Send Invitation"
                        setSendInvitation={setSendInvitation}
                        sendInvitation={sendInvitation}
                    />}

                {createList && 
                    <CreateBoard 
                        placeholder="Type name of list..." 
                        nameButton="Create List"
                        boardsList={boardsList}
                        setBoardsList={setBoardsList}
                        sendTodo={sendTodo}
                        setSendTodo={setSendTodo}
                        createList={createList}
                        setCreateList={setCreateList}
                        selectedTodo={selectedTodo}
                    />}
                    
                <div className="todolists">
                    <Header 
                        sendInvitation={sendInvitation}
                        createList={createList}
                        logout={logout}
                        setLogout={setLogout}
                        isTodoOpen={isTodoOpen}
                        setIsTodoOpen={setIsTodoOpen}
                    />
                    <input 
                        className="title-todo"
                        placeholder="Todo for today"
                    />
                    <div className="todo-invite-user">
                        <button className="todo-invite-user__plus" onClick={() => setSendInvitation(!sendInvitation)}>
                            <CgMathPlus className="todo-invite-user__plus--icon"/>
                        </button>
                        {guestsList.map(guest => (
                                <img 
                                    key={guest.id} 
                                    src={guest.image}
                                    alt={guest.alt}
                                    className={guest.className}
                                />
                        ))}
                    </div>
        
                    <div className="todo-list">
                        <button className="todo-list__plus" onClick={() => setCreateList(!createList)}>
                            <CgMathPlus className="todo-list__plus--icon"/>
                        </button> 
                        <div className="set-todo-list">
                            {boardsList.length !== 0 && boardsList[selectedTodo] &&  (
                                boardsList[selectedTodo].taskList.map(task => (
                                <TodoList 
                                    key={task.id} 
                                    taskName={task.name} 
                                    taskId={task.id}
                                />
                            )))}
                        </div>  
                    </div>
                </div>
                    {logout && <Logout
                        setLogout={setLogout} 
                    />}
                </div>
        </div>
    )
}

export default TaskList;

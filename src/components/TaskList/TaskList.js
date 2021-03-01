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
import styles from'../BoardItem/BoardItem.module.css';
import stylesT from './TaskList.module.css';

const guestsList = [
    {
        id: 1,
        image: userOne,
        alt: 'User profile'
    },
    {
        id: 2,
        image: userTwo,
        alt: 'User profile'
    },
    {
        id: 3,
        image: userThree,
        alt: 'User profile'
    },
    {
        id: 4,
        image: userFour,
        alt: 'User profile'
    },
    {
        id: 5,
        image: userFive,
        alt: 'User profile'
    },
    {
        id: 6,
        image: userSix,
        alt: 'User profile'
    },
    {
        id: 7,
        image: userSeven,
        alt: 'User profile'
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
            <div className={stylesT.TodoListsContainer}>
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
                    
                <div className={stylesT.TodoLists}>
                    <Header 
                        sendInvitation={sendInvitation}
                        createList={createList}
                        logout={logout}
                        setLogout={setLogout}
                        isTodoOpen={isTodoOpen}
                        setIsTodoOpen={setIsTodoOpen}
                        />
                    <input 
                        className={stylesT.TitleTodo}
                        placeholder="Todo for today"
                        />
                    <div className={stylesT.TodoInviteUser}>
                        <button className={stylesT.TodoInviteUserPlus} onClick={() => setSendInvitation(!sendInvitation)}>
                            <CgMathPlus className={stylesT.TodoInviteUserPlusIcon}/>
                        </button>
                        {guestsList.map(guest => (
                            <img 
                            key={guest.id} 
                            src={guest.image}
                            alt={guest.alt}
                            className={styles.ImgFooterUserBorderUser}
                            />
                            ))}
                    </div>
        
                    <div className={stylesT.TodoList}>
                        <button className={stylesT.TodoListPlus} onClick={() => setCreateList(!createList)}>
                            <CgMathPlus className={stylesT.TodoListPlusIcon}/>
                        </button> 
                        <div className={styles.SetTodoList}>
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

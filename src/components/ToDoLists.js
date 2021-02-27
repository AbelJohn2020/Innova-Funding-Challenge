import React, { useState } from 'react'
import { CgMathPlus } from "react-icons/cg";
import Header from './Header';
import '../styles/todolists.css';
import '../styles/boardItem.css';
import userOne from '../images/user-one.jpg';
import userTwo from '../images/user-two.jpg';
import userThree from '../images/user-three.jpg';
import userFour from '../images/user-four.jpg';
import userFive from '../images/user-five.jpg';
import userSix from '../images/user-six.jpg';
import userSeven from '../images/user-seven.jpg';
import Home from '../Home';
import ButtonPlus from './to-do-list/plus-buttons/ButtonPlus';
import LogOut from './to-do-list/logout/LogOut';
import TodoList from './to-do-list/TodoList';
import ButtonPlusSendInvitation from './to-do-list/plus-buttons/ButtonPlusSendInvitation';
// import Form from './to-do-list/form-change-todo/Form';


const ToDoLists = ({
    boardsList, 
    setBoardsList, 
    selectedTodo,
    isTodoOpen,
    setIsTodoOpen,
}) => {
    const [goToHome, setGoToHome] = useState(false);
    const [sendInvitation, setSendInvitation] = useState(false);
    const [createList, setCreateList] = useState(false);
    const [logout, setLogout] = useState(false) 
    const [sendTodo, setSendTodo] = useState(false);

    return (
        <div>
            { goToHome
            ? (
                <Home 
                    logout={logout} 
                    setLogout={setLogout}
                    goToHome={goToHome} 
                    setGoToHome={setGoToHome}
                />
            )
            : (
                <div className="todo-lists-container">
                    {sendInvitation  && 
                        <ButtonPlusSendInvitation
                            placeholder="yefrioscar9814@gmail.com" 
                            nameButton="Send Invitation"
                            setSendInvitation={setSendInvitation}
                            sendInvitation={sendInvitation}
                        />}

                    {createList && 
                        <ButtonPlus 
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
                            goToHome={goToHome} 
                            setGoToHome={setGoToHome}
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
                            // value={inputTitle}
                        />
                        <div className="todo-invite-user">
                            <button className="todo-invite-user__plus" onClick={() => setSendInvitation(!sendInvitation)}>
                                <CgMathPlus className="todo-invite-user__plus--icon"/>
                            </button>

                            <img className="img-footer--user border-user" src={userOne} alt="Woman user"/>
                            <img className="img-footer--user border-user" src={userTwo} alt="Woman user"/>
                            <img className="img-footer--user border-user" src={userThree} alt="Woman user"/>
                            <img className="img-footer--user border-user" src={userFour} alt="Woman user"/>
                            <img className="img-footer--user border-user" src={userFive} alt="Man user"/>
                            <img className="img-footer--user border-user" src={userSix} alt="Man user"/>
                            <img className="img-footer--user border-user" src={userSeven} alt="Man user"/>
            
                        </div>
            
                        <div className="todo-list">
                            <button className="todo-list__plus" onClick={() => setCreateList(!createList)}>
                                <CgMathPlus className="todo-list__plus--icon"/>
                            </button> 
                            <div className="set-todo-list">
                                {boardsList[selectedTodo].taskList.map(task => (
                                    <TodoList 
                                        key={task.id} 
                                        taskName={task.name} 
                                        taskId={task.id}
                                    />
                                ))}
                            </div>  
                        </div>
                    </div>
                        {logout && <LogOut logout={logout} setLogout={setLogout} goToHome={goToHome} setGoToHome={setGoToHome}/>}
                </div>
            )}
        </div>
    )
}

export default ToDoLists

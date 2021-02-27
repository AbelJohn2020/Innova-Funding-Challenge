import React, { useState, useEffect } from 'react'
import { CgHomeAlt } from "react-icons/cg";
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


const ToDoLists = ({boardsList, setBoardsList, selectedTodo}) => {
    const [goToHome, setGoToHome] = useState(false);
    // const [sendInvitation, setSendInvitation] = useState(false);
    const [createList, setCreateList] = useState(false);
    // const [logout, setLogout] = useState(false) 
    const [sendTodo, setSendTodo] = useState(false);
    // const createdTasksList = boardsList[selectedTodo];
    // console.log('createdTasksList', createdTasksList);


    const iconHome = <CgHomeAlt className="icon-home" />;
    const goHome = <button 
                        className="button-home" 
                        onClick={() => setGoToHome(!goToHome)} 
                    >{iconHome}</button>;
    return (
        <div>
            { goToHome
            ? (
                <Home />
            )
            : (
                <div>
                    {/* {sendInvitation  && 
                        <ButtonPlus 
                            placeholder="yefrioscar9814@gmail.com" 
                            nameButton="Send Invitation"
                        />} */}

                    {createList && 
                        <ButtonPlus 
                            placeholder="Type name of list..." 
                            nameButton="Create List"
                            boardsList={boardsList}
                            setBoardsList={setBoardsList}
                            sendTodo={sendTodo}
                            setSendTodo={setSendTodo}
                            selectedTodo={selectedTodo}
                        />}
                        
                    <div className="todolists">
                        <Header 
                            home={goHome} 
                            // sendInvitation={sendInvitation}
                            createList={createList}
                            // logout={logout}
                            // setLogout={setLogout}
                        />

                        <input 
                            className="title-todo"
                            placeholder="Todo for today"
                            // value={inputTitle}
                        />
                        <div className="todo-invite-user">
                            {/* <button className="todo-invite-user__plus" onClick={() => setSendInvitation(!sendInvitation)}>
                                <CgMathPlus className="todo-invite-user__plus--icon"/>
                            </button> */}

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
                                    <TodoList key={task.id} taskName={task.name} taskId={task.id}/>
                                ))}
                            </div>  
                        </div>
                    </div>
                        {/* {logout && <LogOut />} */}
                </div>
            )}
        </div>
    )
}

export default ToDoLists

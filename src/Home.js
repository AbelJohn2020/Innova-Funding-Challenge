import React, { useState } from 'react';
// import Boards from './components/Boards';
import Header from './components/Header';
// import NewBoard from './components/NewBoard';
import { CgAdd } from "react-icons/cg";
import BoardList from './components/BoardList';
import ToDoLists from './components/ToDoLists';
import './styles/home.css';
import LogOut from './components/to-do-list/logout/LogOut';

// {logout, setLogout,goToHome, setGoToHome,}
const Home = () => {
    // const [boardsList, setBoardsList] = useState(JSON.parse(localStorage.getItem("boardsList")) || []);
    const [boardsList, setBoardsList] = useState([]);
    const [isTodoOpen, setIsTodoOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);


    const addBoardToList = () => {
        const newBoard = [{
            id: boardsList.length,
            input: '',
            taskList: [],
        }]
        const boardList = [...boardsList, ...newBoard];
        setBoardsList(boardList);
    }

    const selectBoard = (id) => {
        const filteredList = boardsList.filter(board => id !== board.id);
        setBoardsList(filteredList);
    };

    
    return (
        <div>
            {isTodoOpen ? (
                <ToDoLists 
                    isTodoOpen={isTodoOpen}
                    setIsTodoOpen={setIsTodoOpen}
                    boardsList={boardsList} 
                    setBoardsList={setBoardsList}
                    selectedTodo={selectedTodo}
                />
            ) : (
                <section className="home">
                <div>
                    <Header 
                        // isTodoOpen={isTodoOpen}
                        // setIsTodoOpen={setIsTodoOpen}
                        // logout={logout} 
                        // setLogout={setLogout}
                    />
                    <div className="myboards">
                        <h1 className="subtitle">My Boards</h1>
                        <button 
                            className="myboards__button"
                            onClick={() => addBoardToList()}
                        >
                            <CgAdd className="myboards__button--plus" />
                        </button>
                    </div>
                    <div className="boards">
                        {boardsList.length !== 0 && 
                            <BoardList
                                isTodoOpen={isTodoOpen}
                                setIsTodoOpen={setIsTodoOpen}
                                boardsList={boardsList} 
                                closeBoard={selectBoard}
                                selectedTodo={selectedTodo}
                                setSelectedTodo={setSelectedTodo}
                        />}
                    </div>
                </div>
                {/* <Boards>
                    <NewBoard />
                </Boards> */}
            </section>
            )}
            {/* <section>
                <h1 className="subtitle">Others Boards</h1>
                <div className="boards">
                    {boardsList.length !== 0 && <BoardList boardsList={boardsList} setBoardsList={setBoardsList}/>}
                </div>
            </section> */}
            {/* {logout && <LogOut logout={logout} setLogout={setLogout} goToHome={goToHome} setGoToHome={setGoToHome}/>} */}
        </div>
    )
}

export default Home

import React, { useState } from 'react';
// import Boards from './components/Boards';
import Header from './components/Header/Header';
// import NewBoard from './components/NewBoard';
import { CgAdd } from "react-icons/cg";
import BoardList from './components/BoardList/BoardList';
import TaskList from './components/TaskList/TaskList';
import './Home.css';
import Logout from './components/Logout/Logout';
import OtherBoard from './components/OtherBoard/OtherBoard';

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
                <TaskList 
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
                    
                    <div className="myboards">
                        <h1 className="subtitle">Others Boards</h1>
                    </div>
                    <div className="boards">
                        <OtherBoard title="Todo for today" />
                        <OtherBoard title="Other todo" />
                    </div>
                </div>
            </section>
            )}
        </div>
    )
}

export default Home
import React from 'react';
import Header from './components/Header/Header';
import { CgAdd } from "react-icons/cg";
import BoardList from './components/BoardList/BoardList';
import Logout from './components/Logout/Logout';
import OtherBoard from './components/OtherBoard/OtherBoard';
import styles from './index.module.css';


const Home = ({
    boardsList, 
    setBoardsList,
    isTodoOpen,
    setIsTodoOpen,
    selectedTodo,
    setSelectedTodo,
    logout,
    setLogout,
}) => {
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
            <section className={styles.Home}>
                <div>
                    <Header logout={logout} setLogout={setLogout}/>
                    <div className={styles.Myboards}>
                        <h1 className={styles.Subtitle}>My Boards</h1>
                        <button 
                            className={styles.MyboardsButton}
                            onClick={() => addBoardToList()}
                        >
                            <CgAdd className={styles.MyboardsButtonPlus} />
                        </button>
                    </div>
                    <div className={styles.Boards}>
                        {boardsList.length !== 0 && 
                            <BoardList
                                isTodoOpen={isTodoOpen}
                                setIsTodoOpen={setIsTodoOpen}
                                boardsList={boardsList}
                                setBoardsList={setBoardsList}
                                closeBoard={selectBoard}
                                selectedTodo={selectedTodo}
                                setSelectedTodo={setSelectedTodo}
                        />}
                    </div>
                    
                    <div className={styles.Myboards}>
                        <h1 className={styles.Subtitle}>Others Boards</h1>
                    </div>
                    <div className={styles.Boards}>
                        <OtherBoard title="Todo for today" />
                        <OtherBoard title="Other todo" />
                    </div>
                </div>
                {logout && <Logout setLogout={setLogout} />}
            </section>
        </div>
    )
};

export default Home;
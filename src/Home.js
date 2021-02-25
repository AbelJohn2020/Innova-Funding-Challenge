import React, { useState } from 'react';
// import Boards from './components/Boards';
import Header from './components/Header';
// import NewBoard from './components/NewBoard';
// import { CgHomeAlt } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import BoardList from './components/BoardList';
import './styles/home.css';

const testList = [
    {
        id: 1,
    },
    {
        id: 2,
    },
];

const Home = () => {
    // const iconHome = <CgHomeAlt />;
    // const goHome = <button>{iconHome}</button>;

    const [boardsList, setBoardsList] = useState(testList);
    const [newBoard, setNewBoard] = useState([{}]);

    const addBoardToList = () => {
        console.log(boardsList.length);
        console.log(newBoard.id === boardsList.length);

        // if (newBoard.id !== boardsList.id){
        //     newBoard.id = boardsList.length
        // } else {
        //     console.log('false')
        // }
            
        const addBoard = [...boardsList, ...newBoard];
        setBoardsList(addBoard);
    }   

    return (
        <div>
            {/* <Header home={goHome} /> */}
            <Header />
            <section>
                <div    >
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
                        {
                            boardsList.length !== 0 && <BoardList boardsList={boardsList} setBoardsList={setBoardsList}/>
                        }
                    </div>
                </div>
                {/* <Boards>
                    <NewBoard />
                </Boards> */}
            </section>
            <section>
                <h1 className="subtitle">Others Boards</h1>
                <div className="boards">
                    {
                        boardsList.length !== 0 && <BoardList boardsList={boardsList} setBoardsList={setBoardsList}/>
                    }
                </div>
            </section>
        </div>
    )
}

export default Home

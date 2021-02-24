import React, { useState } from 'react';
// import Boards from './components/Boards';
import Header from './components/Header';
// import NewBoard from './components/NewBoard';
// import { CgHomeAlt } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";

const Home = () => {
    // const iconHome = <CgHomeAlt />;
    // const goHome = <button>{iconHome}</button>;
    
    const [boards, setBoards] = useState('click');

    const addBoard = board => {
        // const newBoards = [board, ...boards];
        console.log('click')
        setBoards(board);
    }

    return (
        <div>
            {/* <Header home={goHome} /> */}
            <Header />
            <section>
                <div>
                    <h1>My Boards</h1>
                    <button onClick={addBoard}>
                        <CgAdd />
                    </button>
                </div>
                {/* <Boards>
                    <NewBoard />
                </Boards> */}
            </section>
            <section>
                <h1>Others Boards</h1>
            </section>
        </div>
    )
}

export default Home

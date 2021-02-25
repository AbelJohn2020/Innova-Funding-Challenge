import React from 'react';
import '../styles/addboardtolist.css';
import userTwo from '../images/user-two.jpg';
import userFour from '../images/user-four.jpg';
import userseven from '../images/user-seven.jpg';

const BoardItem = () => {
    return (
        <div className="board">
            {/* <input 
                type="text"
                className = "input-board"
                placeholder="Todo for today" 
                // disabled
            /> */}

            <h1 className="board__todo">Todo for today</h1>    

            <div className="img-footer">
                <img className="img-footer--user" src={userTwo} alt="Woman user"/>
                <img className="img-footer--user" src={userFour} alt="Woman user"/>
                <img className="img-footer--user" src={userseven} alt="Man user"/>
            </div>
        </div>
    )
}

export default BoardItem

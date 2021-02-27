import React from 'react';
import { FiLogOut } from "react-icons/fi";
import Home from '../../../Home';
import ToDoLists from '../../ToDoLists';
import './logout.css';

const LogOut = ({
    logout, 
    setLogout,
    goToHome,
    setGoToHome,
}) => {
    console.log(logout)
    return (
        <div className="signout">
            <div className="empty-space"onClick={() => setLogout(!logout)}></div>
            <div className="footer" onClick={() => {setGoToHome(!goToHome)}}>
                <button className="logout--button">
                    <FiLogOut className="logout--button__icon"/>
                    <h1 className="logout--button__text">Sign out</h1>
                </button>
            </div>
        </div>

    )
}

export default LogOut

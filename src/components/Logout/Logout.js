import React from 'react';
import { FiLogOut } from "react-icons/fi";
import './logout.css';

const Logout = ({
    logout, 
    setLogout,
    goToHome,
    setGoToHome,
}) => {
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

export default Logout;

import React from 'react';
import { FiLogOut } from "react-icons/fi";
import './logout.css';

const LogOut = () => {
    return (
        <div className="logout">
            <div className="footer">
                <button className="logout--button">
                    <FiLogOut className="logout--button__icon"/>
                    <h1 className="logout--button__text">Sign out</h1>
                </button>
            </div>
        </div>
    )
}

export default LogOut

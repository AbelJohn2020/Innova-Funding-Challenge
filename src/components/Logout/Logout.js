import React from 'react';
import {Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import './logout.css';

const Logout = ({
    setLogout,
}) => {
    return (
        <div className="signout">
            <div className="empty-space" onClick={() => setLogout(false)}></div>
            <div className="footer">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <button 
                        className="logout--button" 
                        onClick={() => setLogout(false)}
                    >
                        <FiLogOut className="logout--button__icon"/>
                        <h1 className="logout--button__text">Sign out</h1>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Logout;

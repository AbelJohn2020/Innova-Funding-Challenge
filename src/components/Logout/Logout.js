import React from 'react';
import {Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import './Logout.css';

const Logout = ({
    setLogout,
}) => {
    return (
        <div className="signout">
            <div className="empty-space-signout" onClick={() => setLogout(false)}></div>
            <Link to='/' style={{textDecoration: 'none'}}>
                <div className="footer">
                    <button 
                        className="logout--button" 
                        onClick={() => setLogout(false)}
                    >
                        <FiLogOut className="logout--button__icon"/>
                        <h1 className="logout--button__text">Sign out</h1>
                    </button>
                </div>
            </Link>
        </div>

    )
}

export default Logout;

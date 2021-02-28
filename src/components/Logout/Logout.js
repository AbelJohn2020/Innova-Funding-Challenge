import React from 'react';
import {Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import './logout.css';

const Logout = ({
    logout, 
    setLogout,
}) => {
    return (
        <div className="signout">
            <div className="empty-space"onClick={() => setLogout(!logout)}></div>
            <div className="footer">
                <Link to='/'>
                    <button className="logout--button">
                        <FiLogOut className="logout--button__icon"/>
                        <h1 className="logout--button__text">Sign out</h1>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Logout;

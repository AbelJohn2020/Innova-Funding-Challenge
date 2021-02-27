import React from 'react';
import { CgDetailsLess } from "react-icons/cg"; 
import '../styles/header.css';

const Header = ({
    home, 
    sendInvitation, 
    logout, 
    setLogout,
    createList, 
}) => {
    return (
        <header>
            <div className="go-home"> 
                {home} 
                <CgDetailsLess className={(sendInvitation || createList)? "dissable-icon" :"header-icon"}/>
            </div>
            <button className="header--button" onClick={() => setLogout(!logout)}>YL</button>
        </header>
    )
}

export default Header;

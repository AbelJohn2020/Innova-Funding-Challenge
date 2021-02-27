import React from 'react';
import { CgDetailsLess } from "react-icons/cg"; 
import '../styles/header.css';
import ButtonHome from './to-do-list/button-home/ButtonHome';

const Header = ({
    // goToHome, 
    // setGoToHome,
    sendInvitation, 
    createList,
    setLogout,
    logout,
    isTodoOpen,
    setIsTodoOpen,
}) => {
    return (
        <header>
            <div className="go-home"> 
                {isTodoOpen && <ButtonHome isTodoOpen={isTodoOpen} setIsTodoOpen={setIsTodoOpen}/>} 
                <CgDetailsLess className={(sendInvitation || createList)? "dissable-icon" :"header-icon"}/>
            </div>
            <button 
                className="header--button" 
                onClick={() => {
                    // setIsTodoOpen(!isTodoOpen)
                    setLogout(!logout)
                }}
            >YL</button>
        </header>
    )
}

export default Header;

import React from 'react';
import { CgDetailsLess } from "react-icons/cg"; 
import './header.css';
import ButtonHome from '../ButtonHome/ButtonHome';

const Header = ({
    sendInvitation, 
    createList,
    setLogout,
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
                className="header--button" onClick={() => setLogout(true)}
            >YL</button>
        </header>
    )
}

export default Header;

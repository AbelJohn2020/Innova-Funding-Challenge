import React from 'react';
import { CgDetailsLess } from "react-icons/cg"; 
import '../styles/header.css';

const Header = ({home}) => {
    return (
        <header>
            <div className="go-home"> 
                {home} 
                <CgDetailsLess className="header-icon" />
            </div>
            <button className="header--button">YL</button>
        </header>
    )
}

export default Header;

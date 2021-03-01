import React from 'react';
import { CgDetailsLess } from "react-icons/cg"; 
import ButtonHome from '../ButtonHome/ButtonHome';
import styles from './Header.module.css';
import stylesT from '../TaskList/TaskList.module.css'

const Header = ({
    sendInvitation, 
    createList,
    setLogout,
    isTodoOpen,
    setIsTodoOpen,
}) => {
    return (
        <header>
            <div className={stylesT.GoHome}> 
                {isTodoOpen && <ButtonHome isTodoOpen={isTodoOpen} setIsTodoOpen={setIsTodoOpen}/>} 
                <CgDetailsLess className={(sendInvitation || createList)? styles.DisableIcon : styles.HeaderIcon}/>
            </div>
            <button className={styles.HeaderButton} onClick={() => setLogout(true)}>
                YL
            </button>
        </header>
    )
}

export default Header;

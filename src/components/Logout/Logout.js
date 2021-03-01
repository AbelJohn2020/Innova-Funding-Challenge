import React from 'react';
import {Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import styles from './Logout.module.css';

const Logout = ({
    setLogout,
}) => {
    return (
        <div className={styles.Signout}>
            <div className={styles.EmptySpaceSignout} onClick={() => setLogout(false)} />
            <Link to='/' style={{textDecoration: 'none'}}>
                <div className={styles.Footer}>
                    <button 
                        className={styles.LogoutButton} 
                        onClick={() => setLogout(false)}
                    >
                        <FiLogOut className={styles.LogoutButtonIcon}/>
                        <h1 className={styles.LogoutButtonText}>Sign out</h1>
                    </button>
                </div>
            </Link>
        </div>

    )
}

export default Logout;

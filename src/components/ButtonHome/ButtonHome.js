import React from 'react';
import {Link} from "react-router-dom";
import { CgHomeAlt } from "react-icons/cg";
import styles from '../TaskList/TaskList.module.css';

const ButtonHome = ({isTodoOpen, setIsTodoOpen}) => {
    return (
        <div>
            <Link to='/'>
                <button className={styles.ButtonHomee} onClick={() => setIsTodoOpen(!isTodoOpen)}>
                    <CgHomeAlt className={styles.IconHome} />
                </button>
            </Link>
        </div>
    )
};

export default ButtonHome;

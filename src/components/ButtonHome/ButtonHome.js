import React from 'react';
import {Link} from "react-router-dom";
import { CgHomeAlt } from "react-icons/cg";

const ButtonHome = ({isTodoOpen, setIsTodoOpen}) => {
    return (
        <div>
            <Link to='/'>
                <button className="button-home" onClick={() => setIsTodoOpen(!isTodoOpen)}>
                    <CgHomeAlt className="icon-home" />
                </button>
            </Link>
        </div>
    )
};

export default ButtonHome;

import React from 'react';
import { CgHomeAlt } from "react-icons/cg";

const ButtonHome = ({isTodoOpen, setIsTodoOpen}) => {
    return (
        <div>
            <button className="button-home" onClick={() => setIsTodoOpen(!isTodoOpen)}>
                <CgHomeAlt className="icon-home" />
            </button>
        </div>
    )
}

export default ButtonHome

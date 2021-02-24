import React from 'react';
import { CgAlignBottom } from "react-icons/cg";

const Header = (props) => {
    return (
        <header>
            <div>
                {props.home} 
                <CgAlignBottom />
            </div>
            <button>YL</button>
        </header>
    )
}

export default Header;

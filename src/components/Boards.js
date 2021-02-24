import React from 'react'

const Boards = (props) => {
    return (
        <ul className="Boards">
            {props.children}
        </ul>
    )
}

export default Boards

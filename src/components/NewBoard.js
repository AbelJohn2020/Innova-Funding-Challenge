import React from 'react'

const NewBoard = (props) => {
    return (
        <li>
            <div>
                <h2>Todo for today</h2>
                {props.image}
            </div>
        </li>

    )
}

export default NewBoard

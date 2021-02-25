import React, { useState } from 'react';
import BoardItem from './BoardItem';


const BoardList = ({boardsList, setBoardsList}) => {
    console.log(boardsList)
    return (
        <div className="boardList">
            { boardsList.map( board => (
                <BoardItem key={board.id}/>
            ))}
        </div>
    )
}

export default BoardList

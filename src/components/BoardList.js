import React, { useState } from 'react';
import BoardItem from './BoardItem';


const BoardList = ({boardsList, setBoardsList, closeBoard}) => {
    console.log('LIST', boardsList);
    return (
        <div className="boardList">
            { boardsList.map( board => (
                <BoardItem key={board.id} itemId={board.id} closeBoard={closeBoard}/>
            ))}
        </div>
    )
}

export default BoardList

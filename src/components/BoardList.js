import React from 'react';
import BoardItem from './BoardItem';


const BoardList = ({
    boardsList, 
    setBoardsList, 
    closeBoard,
    isTodoOpen,
    setIsTodoOpen,
}) => {
    return (
        <div className="boardList">
            { boardsList.map( board => (
                <BoardItem 
                    key={board.id} 
                    itemId={board.id} 
                    closeBoard={closeBoard}
                    isTodoOpen={isTodoOpen}
                    setIsTodoOpen={setIsTodoOpen}
                />
            ))}
        </div>
    )
}

export default BoardList

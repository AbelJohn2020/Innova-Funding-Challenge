import React  from 'react';
import BoardItem from '../BoardItem/BoardItem';
import styles from '../BoardItem/BoardItem.module.css';

const BoardList = ({
    boardsList,
    setBoardsList,
    closeBoard,
    isTodoOpen,
    setIsTodoOpen,
    setSelectedTodo,
}) => {
    return (
        <div className={styles.BoardList}>
            {boardsList.map( board => (
                <BoardItem 
                    key={board.id} 
                    itemId={board.id} 
                    closeBoard={closeBoard}
                    isTodoOpen={isTodoOpen}
                    setIsTodoOpen={setIsTodoOpen}
                    setSelectedTodo={setSelectedTodo}
                    boardsList={boardsList}
                    setBoardsList={setBoardsList}
                />
            ))}
        </div>
    )
}

export default BoardList

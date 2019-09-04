import React from 'react';
import Knight from './Knight';
import Square from './Square';

function renderSquare(x, y, [knightX, knightY]) {
    const black = (x + y) % 2 === 1 ? 'black' : 'white'
    const isKnightHere = knightX === x && knightY === y
    const piece = isKnightHere ? <Knight /> : null

    console.log(piece)
    return <Square color={black}>{piece}</Square>
}

const Board = (props) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
            >
            {renderSquare(0, 0, props.knightPosition)}
            {renderSquare(1, 0, props.knightPosition)}
            {renderSquare(2, 0, props.knightPosition)}
        </div>
    )
}

export default Board;
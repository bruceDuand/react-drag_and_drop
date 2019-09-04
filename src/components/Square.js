import React from 'react';

const Square = (props) => {
    const fill = props.color === 'black' ? 'black' : 'white'
    const stroke = props.color  === 'black' ? 'white' : 'black'
    return (
        <div style={{ 
            backgroundColor: fill,
            color: stroke,
            width: '100%',
            height: '100%',
        }}>
            {props.children}
        </div>
    )
}

export default Square;
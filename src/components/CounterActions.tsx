import React from 'react';

interface Props {
    onIncrement : any,
    onDecrement : any
}

const Count: React.FC<Props> = (props) => {
    return (
        <>
         <button onClick={props.onIncrement}>Increment</button>
        <button onClick={props.onDecrement}>Decrement</button>
        </>
    )
}

export default Count;
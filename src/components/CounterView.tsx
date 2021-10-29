import React from 'react';

interface Props {
    count: number
}

const Count: React.FC<Props> = (props) => {
    return <h2 style={{color: '#fff'}}>{props.count}</h2>;
}

export default Count;
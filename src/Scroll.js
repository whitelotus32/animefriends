import React from 'react';

const Scroll = () => {
    return (
        <div style={{ overflowY: 'Scroll', border: '5px solid black', height: '800px' }}>
            {props.children};
        </div>
    )
};

export default Scroll;
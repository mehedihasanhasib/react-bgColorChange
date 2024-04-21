import React from 'react';

function Button({ color }) {
    return (
        <div
            className='p-3 rounded-full fixed bottom-5'
            style={{ backgroundColor: color }}
        >
        </div>
    );
}

export default Button;
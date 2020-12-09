import React from 'react';

function Node(props) {
    const { isFinish, isStart } = props

    // add className if condiction is true
    const extraClassName = isFinish
        ? 'node-finish'
        : isStart
            ? 'node-start'
            : '';


    return (
        <div className={`node ${extraClassName}`}></div>
    );
}

export default Node;
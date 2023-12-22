import React from 'react';
import './Table.css';

export const Table = ({estado, selectTable, number}) => {

    return <>
        <div className={estado} onClick={() => selectTable()}>
            {number}
        </div>
    </>;
}
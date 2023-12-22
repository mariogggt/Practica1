import React from 'react';

export const ReceiptEntry = ({id_receipt, user, date, receiptViewFunction}) => {

    return <>
        <div>{user}</div>
        <div>{date}</div>
        <div><button onClick={() => receiptViewFunction(id_receipt)}>Ver</button></div>
    </>
}
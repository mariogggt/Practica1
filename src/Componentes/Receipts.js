import React from 'react';
import { useState } from 'react';
import { ReceiptView } from './ReceiptView';
import { ReceiptTable } from './ReceitpTable';

export const Receipts = () => {

    const [receiptView, setReceiptView] = useState();

    return <>
        <div class='receipt main_container'>
            <ReceiptTable receiptViewFunction={setReceiptView} />
            <ReceiptView id_receipt={receiptView}/>
        </div>
    </>
}
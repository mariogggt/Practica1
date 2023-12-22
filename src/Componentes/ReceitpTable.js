import React from 'react';
import { useApi } from '../Hooks/useApi';
import { ReceiptEntry } from './ReceiptEntry';

import './ReceiptTable.css';

export const ReceiptTable = ({userType, receiptViewFunction}) => {

    const receipts = useApi('/receipts?userType='+userType);

    return <>
        <div class='receipt_table'>
            <div class='title'>Usuario</div>
            <div class='title'>Fecha</div>
            <div class='title'>Ver</div>

            {
                receipts.map(function (value) {
                    return <ReceiptEntry id_receipt={value.id_receipt} date={value.date} user={value.user} receiptViewFunction={receiptViewFunction}></ReceiptEntry>
                })
            }
        </div>
    </>
}
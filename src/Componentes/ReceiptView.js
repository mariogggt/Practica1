import React from 'react';
import { useApi } from '../Hooks/useApi';

import './ReceiptView.css';

export const ReceiptView = ({id_receipt}) => {

    const receipt = useApi('/receipt?id_receipt='+id_receipt);

    console.log(receipt);

    return <>
        {
            id_receipt !== undefined && 
            <div class='receipt_view'>
                <div>Numero: {receipt.number} </div>
                <div>Usuario: {receipt.user} </div>
                <div>Fecha: {receipt.date} </div>
                <div>Productos: 
                    <div class='receipt_view_table'>
                        <div class='title'>Nombre</div>
                        <div class='title'>Cant.</div>
                        <div class='title'>Precio</div>
                        <div class='title'>Total</div>
                        {
                            receipt.products.map(function (value) {
                                return <><div>{value.name}</div><div>{value.quantity}</div><div>{value.price}</div><div>{parseFloat(value.price*value.quantity).toFixed(2)}</div></>;
                            })
                        }
                    </div>
                </div>
            </div>
        }
    </> 
}
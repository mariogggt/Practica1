import React from 'react';
import { useApi } from '../Hooks/useApi';

import './Inventory.css';
import { InventoryEntry } from './InventoryEntry';

export const Inventory = ({}) => {

    const productos = useApi('/products');
    
    return <>
        <div class='inventory main_container'>
            <div class='table'>
                <div class='title'>Nombre</div>
                <div class='title'>Cant.</div>
                <div class='title'>Add</div>
                {
                    productos.map(function (value) {
                        return <InventoryEntry name={value.name} cantidad={value.quantity}/>
                    })
                }
            </div>
        </div>
    </>
}
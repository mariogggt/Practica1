import React from 'react';
import { useState } from 'react';

export const InventoryEntry = ({name, cantidad}) => {

    const [quantity, setQuantity] = useState(cantidad);

    return <>
        <div>{name}</div>
        <div>{quantity}</div>
        <div><button onClick={() => setQuantity(quantity + 1)}>+</button></div>
    </>
}
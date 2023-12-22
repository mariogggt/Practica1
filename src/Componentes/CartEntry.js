import React from 'react';

export const CartEntry = ({id_product, name, quantity, price, borrarFunction}) => {

    return <>
        <div>{name}</div>
        <div>{quantity}</div>
        <div>{price}</div>
        <div>{parseFloat(price*quantity).toFixed(2)}</div>
        <div onClick={() => borrarFunction(id_product)}>Del</div>
    </>

}
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { CartEntry } from './CartEntry';

import './Cart.css';

export const Cart = ({cartProducts, cleanFunction, deleteCartFunction, purchaseFunction}) => {

    let keys = Object.keys(cartProducts);

    let products = [];
    for (let i = 0; i < keys.length; i++) {
        products.push(<CartEntry id_product={cartProducts[keys[i]].id_product} name={cartProducts[keys[i]].name} quantity={cartProducts[keys[i]].quantity} price={cartProducts[keys[i]].price} borrarFunction={deleteCartFunction}></CartEntry>);
    }

    return <>
        <div class='cart'>
            <div class='button' onClick={() => cleanFunction()}>Vaciar carrito</div>
            <div class='table'>
                <div class='title'>Nombre</div>
                <div class='title'>Cant.</div>
                <div class='title'>Precio</div>
                <div class='title'>Total</div>
                <div class='title'>Borrar</div>
                {products}
            </div>
            <div class='button' onClick={() => purchaseFunction()}>Comprar</div>
        </div>
    </>;
}
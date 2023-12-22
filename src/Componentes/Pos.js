import React, { useState } from 'react';
import { useApi } from '../Hooks/useApi';
import { Cart } from './Cart';
import { Product } from './Product';

import './Pos.css';


export const Pos = () => {

    const [cartProducts, setCartProducts] = useState({});

    const productos = useApi('/products');

    function addCartFunction(id_product, name, price) {

        const copyCartProducts = {...cartProducts};

        if (typeof copyCartProducts[id_product] === 'undefined') {
            copyCartProducts[id_product] = {
                'id_product': id_product,
                'name': name,
                'price': price,
                'quantity': 1
            }
        } else {
            copyCartProducts[id_product].quantity++;
        }

        setCartProducts({...copyCartProducts});
    }

    function deleteCartFunction(id_product) {

        const copyCartProducts = {...cartProducts};

        delete copyCartProducts[id_product];

        setCartProducts({...copyCartProducts});        
    }

    function purchaseFunction() {
        setCartProducts([]);
    }

    return <>
        <div class='main_container'>
            <div class='products'>
                {
                    productos.map(function (value) {
                        return <Product name={value.name} addCartFunction={() => addCartFunction(value.id_product, value.name, value.price)}></Product>
                    })
                }
            </div>

            <Cart cartProducts={cartProducts} cleanFunction={() => setCartProducts([])} deleteCartFunction={deleteCartFunction} purchaseFunction={purchaseFunction}></Cart>
        </div>
    </>
}
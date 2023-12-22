import React from 'react';

import './Product.css';

export const Product = ({name, addCartFunction}) => {
    
    return <>
        <div class='product' onClick={() => addCartFunction()}>
            <div class='name'>
                {name}
            </div>
        </div>
    </>
}
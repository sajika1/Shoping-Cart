import React, { useContext } from 'react';
import { CartContext } from '../Context/CartItemContext';

export default function Carts() {

    const {state} = useContext(CartContext);

    return (
        <>
        <div className="mt-5 pt-5">
            {
                state.selectedItems.map(item=><h1>{`${item.title} ${item.count}`}</h1>)
            }    
        </div>
        </>
    )
}

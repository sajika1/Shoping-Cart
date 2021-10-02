import React, { useContext } from 'react';

import CartItem from './CartItem';

import { CartContext } from '../Context/CartItemContext';

import { totalPrice } from '../functions/totalPrice';

export default function Carts() {

    const {state , dispatch} = useContext(CartContext);

    return (
        <>
            <div className="container cart__container">

                <div className="left__side mt-5 pt-5">
                    {
                        state.selectedItems.map(item=><CartItem product={item}/>)
                    }
                </div>

                <div className="right__side mt-5 pt-5">
                    <div className="checkout__cart p-5">
                        <div className="show__price">
                            <p className="mb-3">Total Products Count</p>
                            <p className="mb-2">{state.totalCount} $</p>
                        </div>

                        <div className="show__price">
                            <p>Total Price</p>
                            <p>{totalPrice(state)} $</p>
                        </div>
                        <button className="btn btn-outline-primary w-100 mt-3" onClick={()=>dispatch({type:"CLEAR" , selectedItem:state})}>Checkout</button>
                    </div>
                </div>
       

            </div>
        </>
    )
}

import React, { useContext } from 'react';

import CartItem from './CartItem';

import { CartContext } from '../Context/CartItemContext';

import { totalPrice } from '../functions/totalPrice';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Carts() {

    const {state , dispatch} = useContext(CartContext);
    const notify = () =>{
        console.log('notif');
        toast.success("Payment Was successful!");
    } 
    return (
        <>
            <div className="container cart__container">

                <div className="left__side mt-5 pt-5">
                    {
                        state.selectedItems.map(item=><CartItem product={item}/>)
                    }
                </div>

                <div className="right__side mt-5 pt-5">
                    <div className="checkout__cart p-4">
                        <div className="show__price">
                            <p className="mb-3">Total Products Count</p>
                            <p className="mb-2 fs-5">{state.totalCount}</p>
                        </div>

                        <div className="show__price">
                            <p>Total Price</p>
                            <p className="fs-4 fw-bold">{totalPrice(state)} $</p>
                        </div>
                        <Link to='/tancks' className="btn btn-outline-primary w-100 mt-4" 
                              onClick={()=>{
                                            dispatch({type:"CLEAR" , selectedItem:state});
                                            notify();
                                            }
                                        }>Checkout</Link>
                    </div>
                </div>
       
                <ToastContainer/>
            </div>
        </>
    )
}

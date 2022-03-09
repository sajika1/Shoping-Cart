import React from 'react';

//? COMPONENTS
import CartItem from './CartItem';

import { totalPrice } from '../functions/totalPrice';
import { Link } from 'react-router-dom';

// to show toasts use from react-toastify library 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../Redux/cart/cartAction';

export default function Carts() {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    const notify = () =>{
        toast.success("Payment Was successful!");
        console.log('notif');
    } 
    return (
        <>
            <div className="container cart__container">

                <div className="left__side mt-5 pt-5">
                    {
                        state.selectedItems.map(item=><CartItem key={item.id} product={item}/>)
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
                                            dispatch(clear());
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

import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Styles/Product.module.css';

//* Helper functions
import { wasAdded } from '../functions/wasAdded';
import { findIndex } from '../functions/findIndex';

// redux hooks and action functions was needed to call dispatcher
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrease, deleteItem, increase } from '../Redux/cart/cartAction';

export default function Product({productItem}) {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    const getPrice = ()=> {
        const basePrice = productItem.price;
        if (!!state.selectedItems.find(item=>item.id === productItem.id)) {
            const productCount = state.selectedItems[findIndex(state, productItem.id)].count;
            return (basePrice * productCount).toFixed(2);
        }else{
            return basePrice;
        }
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={productItem.image} alt="product"/>
                </div>
                <div>
                    <div className={styles.body}>
                        <div className={styles.title}>
                            {productItem.title}
                        </div>
                        <Link to={`/products/${productItem.id}`} className="text-primary">show details</Link>
                        </div>

                        <div className={`${styles.price} fs-4`}>${getPrice()}</div>

                        <div className={styles.footer}>
                            <div className={styles.buttons}>
                                {
                                    (!wasAdded(state , productItem.id))
                                    ?
                                    <button className="btn btn-primary w-100 py-2" onClick={()=> dispatch(addItem(productItem)) }>Add To Cart</button>
                                    :
                                    (
                                        <div className="w-100 d-flex justify-content-between align-items-center">
                                            <div>
                                                {
                                                    (state.selectedItems[findIndex(state , productItem.id)].count===1)
                                                    ?
                                                    <button className="btn px-3 handel__button__decrease" onClick={()=>dispatch(deleteItem(productItem))}><i class="bi bi-trash"></i></button>
                                                    :
                                                    <button className="btn px-3 handel__button__decrease" onClick={()=>dispatch(decrease(productItem))}>-</button>
                                                }
                                            </div>
                                            <p className=" d-flex justify-content-between align-items-center fs-5 fw-bold">{state.selectedItems[findIndex(state , productItem.id)].count}</p>
                                            <button className="btn btn-primary handel__button__plus px-3" onClick={()=>dispatch(increase(productItem))}>+</button>
                                        </div>
                                    )
                                }
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

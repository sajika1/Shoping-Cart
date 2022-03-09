import React from 'react';

import styles from '../Styles/Cart.module.css';
import { shortTitle } from '../functions/shortTitle';
import { useDispatch } from 'react-redux';
import { decrease, deleteItem, increase } from '../Redux/cart/cartAction';
export default function CartItem({product}) {
    
    const dispatch = useDispatch();

    return (
        <>
            <div className={`shadow px-4 ${styles.cart}`}>
            
                
                <div className="d-flex align-items-center gap-3">
                    <div className={styles.image}>
                        <img src={product.image} alt="product Image" className="img-fluid p-lg-3"/>
                    </div>
                    <div className={styles.describe}>
                        <div>
                            <h2 className="fw-bold">{shortTitle(product.title)}</h2>
                            <p className="text-muted">{` ${product.price} $`}</p>
                            <p className="fs-5 my-2">{`${product.price * product.count} $`}</p>
                        </div>
                    </div>
                </div>
        



                <div className={styles.manage}>
                    {
                        <div className={`${styles.float__manage}`}>
                            <div>
                                {
                                    (product.count===1)
                                    ?
                                    <button 
                                        className={`btn btn-outline-danger `}  
                                        onClick={()=>dispatch(deleteItem(product))}>
                                        <i class="bi bi-trash fs-5"></i>
                                    </button>
                                    :
                                    <button 
                                        className={`btn btn-outline-danger `}  
                                        onClick={()=>dispatch(decrease(product))}>
                                        <i class="bi bi-dash fs-5"></i>
                                    </button>
                                }
                            </div>
                            
                            <p className=" d-flex text-center justify-content-between align-items-center fs-5 fw-bold">
                                {product.count}
                            </p>

                            <button className={`btn btn-outline-primary`}  
                                onClick={()=>dispatch(increase(product))}>
                                <i class="bi bi-plus fs-5"></i>
                            </button>
                            
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

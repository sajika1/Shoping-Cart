import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from '../Styles/Product.module.css';
import { CartContext } from '../Context/CartItemContext';
import { wasAdded } from '../functions/wasAdded';
import { findIndex } from '../functions/findIndex';
export default function Product({productItem}) {

    const { state , dispatch } = useContext(CartContext);

    const getPrice = ()=> {
        const basePrice = productItem.price;
        if (!!state.selectedItems.find(item=>item.id === productItem.id)) {
            const productCount = state.selectedItems[findIndex(state, productItem.id)].count;
            return basePrice * productCount;
        }else{
            return basePrice;
        }
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={productItem.image} alt="product" className="" />
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
                                    <button className="btn btn-primary w-100 py-2" onClick={()=> dispatch({type:"ADD_ITEM" , selectedItem:productItem}) }>Add To Cart</button>
                                    :<div className="w-100 d-flex justify-content-between align-items-center">
                                        <div>
                                            {
                                                (state.selectedItems[findIndex(state , productItem.id)].count===1)
                                                ?
                                                <button className="btn px-3 handel__button__decrease" onClick={()=>dispatch({type:"DELETE",selectedItem:productItem})}><i class="bi bi-trash"></i></button>
                                                :
                                                <button className="btn px-3 handel__button__decrease" onClick={()=>dispatch({type:"DECREASE",selectedItem:productItem})}>-</button>
                                            }
                                        </div>
                                        <p className=" d-flex justify-content-between align-items-center fs-5 fw-bold">{state.selectedItems[findIndex(state , productItem.id)].count}</p>
                                        <button className="btn btn-primary handel__button__plus px-3" onClick={()=>dispatch({type:"INCREASE",selectedItem:productItem})}>+</button>

                                    </div>
                                }
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

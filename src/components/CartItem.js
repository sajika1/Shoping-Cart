import React , {useContext} from 'react';
import { CartContext } from '../Context/CartItemContext';
import styles from '../Styles/Cart.module.css';
import { shortTitle } from '../functions/shortTitle';
export default function CartItem(props) {
    
    const {product} = props;
    const { dispatch } = useContext(CartContext);

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
                                    <button className={`btn btn-outline-danger `}  onClick={()=>dispatch({type:"DELETE",selectedItem:product})}><i class="bi bi-trash fs-5"></i></button>
                                    :
                                    <button className={`btn btn-outline-danger `}  onClick={()=>dispatch({type:"DECREASE",selectedItem:product})}><i class="bi bi-dash fs-5"></i></button>
                                }
                            </div>
                            <p className=" d-flex text-center justify-content-between align-items-center fs-5 fw-bold">{product.count}</p>
                            <button className={`btn btn-outline-primary`}  onClick={()=>dispatch({type:"INCREASE",selectedItem:product})}><i class="bi bi-plus fs-5"></i></button>

                        </div>
                    }
                </div>

            </div>
        </>
    )
}

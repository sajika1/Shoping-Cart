import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Styles/Product.module.css';

export default function Product({details}) {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={details.image} alt="product" className="" />
                </div>
                <div>
                    <div className={styles.body}>
                        <div className={styles.title}>
                            {details.title}
                        </div>
                        <Link to={`/products/${details.id}`} className="text-muted">show Details</Link>
                        </div>

                        <div className={`${styles.price} text-primary`}>${details.price}</div>

                        <div className={styles.footer}>
                            <div className={styles.buttons}>
                            <a href="#" className="btn btn-primary w-100 py-2">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

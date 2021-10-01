import React, { useContext } from 'react';
import { ProductsContext } from '../Context/ProductContextProvider';
import Product from './Product';

export default function Products() {
    
    const products = useContext(ProductsContext);
    
    return (
        <>
            {
                (products.length > 0)?

                    <div className="container">
                        <p className="my-5 pt-5 text-center display-5">Products</p>    
                        <div className="products">
                            {
                                products.map(product => <Product key={product.id} productItem={product}/> )
                            }
                            
                        </div>
                    </div>
                :
                <div className="d-flex vh-100 justify-content-center align-items-center">
                   <div class="spinner-border text-primary" role="status">
                        <span class="ms-4">Loading</span>
                    </div>
                </div>
            }
        </>
    )
}

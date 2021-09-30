import React, { useContext } from 'react';
import { ProductsContext } from '../Context/ProductContextProvider';
import Product from './Product';

export default function Products() {
    
    const products = useContext(ProductsContext);
    
    return (
        <>
            <div className="container">
                <p className="my-5 pt-5 text-center display-5">Products</p>    
                <div className="products">
                    {
                        products.map(product => <Product key={product.id} details={product}/> )
                    }
                    
                </div>
            </div>
        </>
    )
}

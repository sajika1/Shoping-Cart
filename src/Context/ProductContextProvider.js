import React , { createContext, useEffect, useState } from 'react'

import { getData } from '../functions/getProduct';

export const ProductsContext = createContext();

export default function ProductContextProvider(props) {

    const [products , setProducts] = useState( [ ] );

    useEffect( () =>{
        const fetchProducts = async() =>{
            setProducts(await getData());
        }
        
        fetchProducts();
    } , [] )



    return (
        <>
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
        </>
    )
}

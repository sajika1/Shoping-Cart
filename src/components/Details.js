import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../Context/ProductContextProvider';

export default function Details(props) {

    const productDetailsId = props.match.params.id;
    const products = useContext(ProductsContext)
    
    const product = products[ productDetailsId -1 ]

    return (
        <>
          <div className="container vh-100 d-flex align-item-center pt-5 pt-lg-0">
                    <div className="row align-items-center flex-row-reverse text-center text-md-start">
                        
                        <div className="col-md-5 col-lg-4 p-5 p-md-0 p-lg-3">
                            <img src={product.image} alt="Product Details" className="img-fluid p-lg-4 p-5" />
                        </div>
                       
                        <div className="col-md-7 col-lg-8">
                            <h3 className="display-6 mb-3 mb-lg-5 mt-3 mt-lg-0">{product.title}</h3>
                            <p><span className="text-primary fw-bold">Category: </span>{product.category}</p>
                            <p className="pe-5">{product.description}</p>
                            <Link to="/products" className="btn btn-primary btn-lg mt-3 mb-5 mb-md-0">Back To Shop</Link>
                        </div>
                        
                    </div>
            </div>  
        </>
    )
}

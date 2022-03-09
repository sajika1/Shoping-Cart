import React from 'react';
import { Link } from 'react-router-dom';
import Thanks from '../Images/thanks.png';

export default function Tancks() {
    return (
        <>
            <div className="container vh-100 d-flex align-item-center pt-5 pt-lg-0">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-md-6">
                        <h1 className="display-6 mb-3 mb-lg-5 mt-3 mt-lg-0"><span className="text-primary">Thanks</span> For Shopping</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, iste.</p>
                        <Link to="/products" className="btn btn-primary btn-lg mt-4">more shopping</Link>
                    </div>
                    <div className="col-md-6">
                        <img src={Thanks} alt="Black Friday picture" className="img-fluid p-4" />
                    </div>
                </div>
            </div>  

        </>
    )
}

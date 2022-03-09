import React from 'react';
import { Link } from 'react-router-dom';
import TrustMe from '../Images/trustMe.png';

export default function AboutUs() {
    
    return (
        <>
         <div className="container vh-100 d-flex align-item-center pt-5 pt-lg-0">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-md-6">
                        <h1 className="display-6 mb-3 mb-lg-5 mt-3 mt-lg-0"><span className="text-primary">Trust us</span></h1>
                        <p className="fs-4">
                            We are an online store to make your purchase as fast as possible and in the easiest way.
                        </p>
                        <Link to="/" className="btn btn-primary btn-lg mt-4">Go to Home</Link>
                        <div className="row justify-content-center mt-md-5 mt-2">
                            <p className="">Follow Me on</p>
                            <div className="d-flex gap-5 justify-content-center justify-content-md-start mt-4">
                                <div><a href="#" className="text-primary"><i className="bi bi-instagram fs-5"></i></a></div>
                                <div><a href="#" className="text-primary"><i className="bi bi-telegram fs-5"></i></a></div>
                                <div><a href="#" className="text-primary"><i className="bi bi-whatsapp fs-5"></i></a></div>
                                <div><a href="#" className="text-primary"><i className="bi bi-envelope fs-5"></i></a></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <img src={TrustMe} alt="Black Friday picture" className="img-fluid p-4" />
                    </div>
                </div>
            </div>  
            
            <p className="mt-5 pt-5">
            </p>
        </>
    )
}

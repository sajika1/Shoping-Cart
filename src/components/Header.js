import React from 'react';
import {Navbar , Nav , Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Header() {

    const state = useSelector(state => state.cartState)

    return (
        <>
           <Navbar collapseOnSelect expand="lg" fixed="top" className="shadow-sm bg-white">
                <Container>
                    <Navbar.Brand className="me-lg-5npm " href="/">EasyStore <span className="text-muted fs-6 ">.com</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar" />
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="mx-auto mx-lg-2 mt-md-0 mt-4 "><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link href="#" className="mx-auto mx-lg-2 d-block d-lg-none">
                                <Link to='/carts'>
                                    carts
                                    <span className="badge bg-primary ms-2">
                                        {`${(state.totalCount>0) ? state.totalCount : ""}`}
                                    </span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#" className="mx-auto mx-lg-2 "><Link to='/products'>Products</Link></Nav.Link>
                            <Nav.Link href="#" className="mx-auto mx-lg-2 mb-3 mb-lg-0"><Link to='/aboutus'>About Us</Link></Nav.Link> 
                        </Nav>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                             <Nav.Link href="#" className="mx-auto mx-lg-2 d-none d-lg-block">
                                <Link to='/carts'>
                                    <i class="bi bi-cart2 fs-4"></i>
                                    <span className="badge bg-primary ms-2 position-absolute top-1">
                                        {`${(state.totalCount>0) ? state.totalCount : ""}`}
                                    </span>
                                </Link>
                            </Nav.Link> 
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

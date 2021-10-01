import React, { createContext, useContext } from 'react';
import {Navbar , Nav , Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartItemContext';
export default function Header() {

    const {state} = useContext(CartContext);

    return (
        <>
           <Navbar collapseOnSelect expand="lg" fixed="top" className="shadow-sm bg-white">
                <Container>
                    <Navbar.Brand href="/">EasyStore <span className="text-muted fs-6 ">.com</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar" />
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="mx-auto mx-lg-2 mt-md-0 mt-4 "><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link href="#" className="mx-auto mx-lg-2 "><Link to='/carts'>{`carts ${(state.totalCount>0) ? state.totalCount : ""}`}</Link></Nav.Link>
                            <Nav.Link href="#" className="mx-auto mx-lg-2 "><Link to='/products'>Products</Link></Nav.Link>
                            <Nav.Link href="#" className="mx-auto mx-lg-2  "><Link to='/aboutus'>About Us</Link></Nav.Link> 
                        </Nav>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                            <form className="d-flex mt-4 pb-3 py-lg-0 my-md-1 me-0">    
                                <input className="form-control me-1" type="search" placeholder="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

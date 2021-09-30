import React from 'react';

import { Route , Switch , Redirect } from 'react-router-dom'

// Emporting Components from Components Directory
import ProductContextProvider from './Context/ProductContextProvider';

import Header from './components/Header';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Carts from './components/Carts';
import Details from './components/Details';

function App() {

  return (
    <>
      <Header />
      <ProductContextProvider>
        <Switch>
          <Route path="/carts" component={Carts} />
          <Route path="/products/:id" component={Details} />
          <Route path="/products" component={Products} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/" component={Landing}/>
          <Redirect to="/" />    
        </Switch>      
      </ProductContextProvider>

    </>
  );
}

export default App;

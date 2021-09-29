import React from 'react';

import { Route , Switch } from 'react-router-dom'

// Emporting Components from Components Directory
import Header from './components/Header';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Carts from './components/Carts';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/carts" component={Carts} />
        <Route path="/products" component={Products} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/" component={Landing}/>
      
      </Switch>      

    </>
  );
}

export default App;

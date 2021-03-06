import React from 'react';

import { Route , Switch , Redirect } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from './Redux/store';

// Importing Components from Components Directory
import Header from './components/Header';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Carts from './components/Carts';
import Details from './components/Details';
import Tancks from './components/Tancks';



function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/carts" component={Carts} />
          <Route path="/products/:id" component={Details} />
          <Route path="/products" component={Products} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/tancks" component={Tancks} />
          <Route path="/" component={Landing}/>
          <Redirect to="/" />    
        </Switch>      
      </Provider>
    </>
  );
}

export default App;

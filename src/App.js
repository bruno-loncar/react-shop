import './App.css';
import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';
import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from 'pages/collection/collection.page';
import ShopPage from 'pages/shop/shop.page';
import SignInPage from 'pages/signin/signin.page';
import store from './state/shoppingCart'
import CheckoutPage from 'pages/checkout/checkout.page';

function App() {

  return (
    <div className="App">
      <Header store={store} />

      <div style={{ margin: '100px 0' }}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage store={store} />
        </Route>
        <Route path="/shop/:collectionName">
          <CollectionPage store={store} />
        </Route>
        <Route path="/checkout">
          <CheckoutPage store={store} />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
      </div>
    </div>
  );
}

export default App;

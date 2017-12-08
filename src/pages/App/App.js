import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import logo from '../../logo.svg';
import './App.css';
import CataloguePage from '../Catalogue/CataloguePage'
import CheckoutPage from '../Checkout/CheckoutPage'
import ConfirmationPage from '../Confirmation/ConfirmationPage'
import WelcomePage from '../Welcome/WelcomePage'


class App extends Component {
  render() {
    return(
      <div>
        <h1 className="App-title">Amazio</h1>
        <CataloguePage />
        <CheckoutPage />
        <ConfirmationPage />
        <WelcomePage />

      </div>
    );
  }
}

export default App;

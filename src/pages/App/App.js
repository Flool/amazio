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
import Nav from '../../components/Navbar/Navbar'


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: null,
    }
  }
  componentDidMount() {
    fetch('/catalogue').then( (data) => data.json()).then((data) => {
      this.setState({products: data})
    });
  }
  render() {
    return(
      <div>
        <header className='nav'>Amazio || Cart</header>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage 

              />
            }/>
            <Route exact path='/catalogue' render={() =>
              <CataloguePage products={this.state.products}/>
            }/>
            <Route exact path='/checkout' render={() =>
              <CheckoutPage 

              />
            }/>
            <Route exact path='/confirmation' render={() =>
              <ConfirmationPage 

              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {

render(){
  return (
  <Provider store={ store }>
    <Router>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path="/"  component={home}/>
        </Switch>
      </div>
    </Router>
  </Provider> 
  );
}
}


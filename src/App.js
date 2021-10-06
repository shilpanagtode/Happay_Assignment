import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <h2 className="popular_card">Most Popular</h2>
        <div class="main_items">
        
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          
        </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    
  };
};

export default connect(mapStateToProps)(App);

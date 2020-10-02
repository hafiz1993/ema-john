import React, { createContext, useState} from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Notfound from './Components/Notfound/Notfound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Shipment from './Components/Shipment/Shipment';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/privateRoute/privateRoute'





export const UserContext = createContext();




function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    
      <UserContext.Provider value ={[loggedInUser, setLoggedInUser]} className="App">
      
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
          <Shipment></Shipment>
          </PrivateRoute>
           <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    

  );
}

export default App;

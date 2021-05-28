import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";
import Homepage from "./Homepage";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [cartItems, setCartItems] = useState([]);
  //creating cartItems state as an empty array!
  //
  //could check local storage for cartItems on render!
  //this includes setting intial value of cart items state with local storage.get, nested in a ternary
  const [items, setItems] = useState([]);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage
            // passing down states as props! (i moved items state into App.js)
            items={items}
            setItems={setItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

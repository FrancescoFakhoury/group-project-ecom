import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";
import Homepage from "./Homepage";
import GlobalStyles from "./GlobalStyles";

function App() {

  return (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}



export default App;

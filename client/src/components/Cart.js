import React, { useState } from "react";

const Cart = ({ cartItems }) => {
  //if cartArray length is smaller than 1 say "looks like your carts empty"
  //
  //yalready know wtf goin on over here
  return cartItems.length > 0 ? (
    <>
      {cartItems.map((cartItem) => {
        return <div>{cartItem.name}</div>;
      })}
    </>
  ) : (
    <div>looks like your cart is empty!</div>
  );
};

export default Cart;

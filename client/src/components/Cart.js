import React, { useState } from "react";
import styled from "styled-components";
let total = 0;
let taxes = 0;
const Cart = ({ cartItems }) => {
  cartItems.forEach((cartItem) => {
    let alteredValue = cartItem.price.replace("$", "");
    let numValue = Number(alteredValue);
    // total = numValue * 0.15 + numValue;
    taxes += numValue * 0.15;
    total = numValue * 1.15;
  });
  //if cartArray length is smaller than 1 say "looks like your carts empty"
  //
  //yalready know wtf goin on over here
  return (
    <Wrapper>
      {cartItems.length > 0 ? (
        <CartWrap>
          {cartItems.map((cartItem) => {
            return (
              <InfoWrap>
                <div>{cartItem.name}</div>
                <div>{cartItem.price}</div>
              </InfoWrap>
            );
          })}

          <div>Taxes: {taxes.toFixed(2)}</div>
          <div>Total: {total.toFixed(2)}</div>
          <StyledBtn>Purchase Items</StyledBtn>
        </CartWrap>
      ) : (
        <EmptyWrap>Looks like your cart is empty!</EmptyWrap>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  margin: 20vh auto;
  font-family: var(--font-family);
`;
const StyledBtn = styled.button`
  /* margin-left: 40%;
  margin-bottom: 20px; */
  font-size: 24px;
  /* margin: 20px 0 20px 40%; */
  padding: 20 30px;
  margin: 40px;
  border-style: none;
  align-self: center;
  color: #ffff;
  background-image: linear-gradient(to right, turquoise, purple);
  border-radius: 4px;
  box-shadow: 10px 10px 10px -10px;
`;

const InfoWrap = styled.div`
  padding: 20px;
`;

const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border: 1px solid grey;
  box-shadow: 20px 20px 20px -20px;
`;

const EmptyWrap = styled.h2`
  background-image: linear-gradient(to right, turquoise, purple);
  color: #ffff;

  padding: 50px;
  align-self: center;
`;
export default Cart;

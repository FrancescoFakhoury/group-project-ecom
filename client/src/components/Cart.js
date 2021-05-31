import React, { useState } from "react";
import styled from "styled-components";

let array = [];

const Cart = ({ cartItems, setCartItems }) => {
  //state was not working when we used it in either a forEach or a map and we didnt know why but basically, even a simple console.log was making the React component render
  //like more than a hundred times, so we just had to use BandAid code and just set the state to be 0 but not use setTotal
  let [total] = useState(0);

  const handleClick = (cartItem) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.indexOf(cartItem);
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clickSubmit = (cartItem) => {
    //the syntax for body had to be like JSON.stringify(data) so we had to create an object data with what were sending in, and because we couldnt use cartItems._id OUTSIDE of the map in render
    //we had to create an array and like throw the id of the item inside on like 48
    const data = {
      _id: array,
    };
    fetch("/products/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response.json().then((json) => {
        //resetting the state of cartItems to be empty once purchased.
        setCartItems([]);
        //we dont need to grab anything from json in this situation, but we are console logging it to see if it works.
        console.log(json);
      })
    );
  };

  //if cartArray length is smaller than 1 say "looks like your carts empty"
  //
  //yalready know wtf goin on over here
  return (
    <Wrapper>
      {cartItems.length > 0 ? (
        <>
          <Title>Your Cart</Title>
          <CartWrap>
            {cartItems.map((cartItem) => {
              //pushing the item into an array we created at the top of the component
              array.push(cartItem._id);
              //formula for calculating the total, we didnt do taxes.
              total += Number(cartItem.price.replace("$", ""));
              return (
                <InfoWrap>
                  <img src={cartItem.imageSrc} />
                  <ItemName>{cartItem.name}</ItemName>
                  <ItemPrice>{cartItem.price}</ItemPrice>
                  <StyledBtn onClick={() => handleClick(cartItem)}>Remove</StyledBtn>
                </InfoWrap>
              );
            })}
            <Amount>
              <Numbers>Total: {total.toFixed(2)}</Numbers>
            </Amount>
            <BigStyledBtn type="submit" onClick={() => clickSubmit()}>
              Purchase Items
            </BigStyledBtn>
          </CartWrap>
        </>
      ) : (
        <EmptyWrap>Looks like your cart is empty!</EmptyWrap>
      )}
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 40px;
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  color: black;
  opacity: 0.6;
`;

const ItemName = styled.p`
  font-size: 20px;
  font-family: var(--font-family);
`;

const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 20px;
  font-family: var(--font-family);
`;

const Numbers = styled.p`
  font-size: 20px;
  font-family: var(--font-family);
  font-weight: bold;
`;

const Amount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  margin: 10vh auto;
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
  font-family: var(--font-family);

  &:hover {
    cursor: pointer;
  }
`;
const BigStyledBtn = styled.button`
  /* margin-left: 40%;
  margin-bottom: 20px; */
  font-size: 48px;
  /* margin: 20px 0 20px 40%; */
  padding: 20 30px;
  margin: 40px;
  border-style: none;
  align-self: center;
  color: #ffff;
  background-image: linear-gradient(to right, turquoise, purple);
  border-radius: 4px;
  box-shadow: 10px 10px 10px -10px;
  font-family: var(--font-family);

  &:hover {
    cursor: pointer;
  }
`;
const InfoWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 20px -20px;
  border: solid grey 1px;
  margin: 30px;
`;

const CartWrap = styled.div`
  padding: 100px;
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

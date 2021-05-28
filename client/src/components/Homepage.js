import React, { useEffect, useState } from "react";
import styled from "styled-components";
//importing props to Homepage.js from App.js
const Homepage = ({
  //CartItems is final product state that holds products that the user adds to cart
  cartItems,
  setCartItems,
  //items is the state to hold all products from the fetch endpoint
  items,
  setItems,
}) => {
  //
  //handleClick function called onClick of add item to cart
  //
  //item placeholder in argument is so we can pass the particular item from our items.map
  //
  //and then append it to our cartItems array VIA state
  //
  const handleClick = (item) => {
    //copied this function from react website,
    //not 100% on how it works but other than the slice it's just state setting
    //
    //https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np
    //
    const newList = cartItems.slice();
    newList.push(item);
    setCartItems(newList);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  useEffect(() => {
    fetch("/products/all").then((response) =>
      response.json().then((json) => {
        console.log(json);
        setItems(json.data);
      })
    );
  }, []);
  console.log(cartItems);
  return (
    <Wrapper>
      <Title>Items for Sale</Title>
      <ProductWrap>
        {items.map((item) => {
          return (
            <ProductWrap2>
              <img src={item.imageSrc} />
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
              {item.numInStock > 0 ? (
                <StyledButton onClick={() => {
                  handleClick(item)>Add to Cart</StyledButton>
              ) : (
                <StyledButton disabled>Add to Cart</StyledButton>
              )}
            </ProductWrap2>
          );
        })}
      </ProductWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: black;
  opacity: 0.6;
  font-size: 40px;
  display: flex;
  justify-content: center;
`;

const ItemName = styled.div`
  padding-top: 20px;
  max-width: 250px;
  font-size: 20px;
  font-family: var(--font-family);
`;

const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font-family);
`;
const ProductWrap = styled.div`
  display: grid;
  grid-template-columns: 225px 225px 225px;
  justify-content: space-around;
  grid-gap: 40px;
  padding: 25px;
`;

const StyledButton = styled.button`
  font-size: 20px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px;
  background-image: linear-gradient(to right, purple, turquoise);
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const ProductWrap2 = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 20px 20px 20px -20px;
  border: solid grey 1px;
  padding: 20px;
`;
export default Homepage;

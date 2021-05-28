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
      <h2>All Products</h2>
      <ProductWrap>
        {items.map((item) => {
          return (
            <ProductWrap2 key={item._id}>
              <ItemName>{item.name}</ItemName>
              <div>{item.price}</div>
              <img src={item.imageSrc} />
              <button
                onClick={() => {
                  handleClick(item);
                  //setting the onClick
                }}
              >
                Add to Cart
              </button>
            </ProductWrap2>
          );
        })}
      </ProductWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ItemName = styled.div`
  max-width: 175px;
`;
const ProductWrap = styled.div`
  display: grid;
  grid-template-columns: 225px 225px 225px;
  justify-content: space-around;
  grid-gap: 40px;
  padding: 25px;
`;

const ProductWrap2 = styled.div`
  margin: 20px 0;
  border: 2px solid black;
`;
export default Homepage;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Homepage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/products/all").then((response) =>
      response.json().then((json) => {
        console.log(json);
        setItems(json.data);
      })
    );
  }, []);
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
                <StyledButton>Add to Cart</StyledButton>
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

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
      <h2>All Products</h2>
      <ProductWrap>
        {items.map((item) => {
          return (
            <ProductWrap2>
              <ItemName>{item.name}</ItemName>
              <div>{item.price}</div>
              <img src={item.imageSrc} />
              {item.numInStock > 0 ? <button>Add to Cart</button> : <button disabled>Add to Cart</button>}
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

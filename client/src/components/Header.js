import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Title>Taco's Dream Team Store</Title>
      <LinkContainer>
        <MyStyleLink
          to="/"
          exact
          activeStyle={{
            color: "#06c",
            textDecoration: "underline",
          }}
        >
          Home
        </MyStyleLink>
        <MyStyleLink
          to="/cart"
          activeStyle={{
            color: "#06c",
            textDecoration: "underline",
          }}
        >
          Cart
        </MyStyleLink>
      </LinkContainer>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 50px;
  font-family: var(--font-family);
  color: #fff;
  margin-left: 40px;
`;

const LinkContainer = styled.nav`
  display: flex;
  gap: 50px;
  margin-right: 40px;
`;

const MyStyleLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: var(--font-family);
  font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, purple, turquoise);
`;

export default Header;

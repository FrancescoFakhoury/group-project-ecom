import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightWrapper>
        <FaRegCopyright size="2rem" />
        <CopyrightText>
          <Year>2020-2021</Year> Taco's Dream Team | All Rights Reserved
        </CopyrightText>
      </CopyrightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Year = styled.span`
  font-weight: bold;
`;

const CopyrightText = styled.p`
  font-size: 18px;
  font-family: Var(--font-family);
`;

export default Footer;

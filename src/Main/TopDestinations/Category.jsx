import React from "react";
import styled from "styled-components";

const CategoryTitle = styled.h3`
  padding: 0 0.3rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  color: ${props => (props.active ? "#5C5C5C" : "#00ace2")};
  border-bottom: ${props => (props.active ? "1px solid #00ace2" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: ${props => (props.active ? "auto" : "pointer")};
`;

const CategoryImgWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  align-item: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  width: 50px;
  height: 50px;
`;

export default ({ img, alt, active, name }) => (
  <Wrapper>
    <CategoryImgWrapper>
      <img src={img} alt={alt} />
    </CategoryImgWrapper>
    <CategoryTitle active={active}>{name}</CategoryTitle>
  </Wrapper>
);

import React from "react";
import styled from "styled-components";

import Search from "./Search";
import Categories from "./Categories";
import CityCards from "./CityCards";

const Background = styled.div`
  background: #f8fcff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

export default () => (
  <Background>
    <Wrapper>
      <Search />
      <Categories />
      <CityCards />
    </Wrapper>
  </Background>
);

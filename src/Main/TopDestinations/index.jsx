import React from "react";
import styled from "styled-components";

import Search from "./Search";
import Categories from "./Categories";
import CityCards from "./CityCards";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 1rem 0;
  background: #f8fcff;
`;

export default () => (
  <Wrapper>
    <Search />
    <Categories />
    <CityCards />
  </Wrapper>
);

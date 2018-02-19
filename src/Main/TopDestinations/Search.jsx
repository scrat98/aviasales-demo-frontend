import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

import compass from "./icons/compass.svg";
import edit from "./icons/edit.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
`;

const SearchImg = styled.img`
  margin-bottom: 1.5rem;
`;

const SearchForm = styled.div`
  display: inline-block;
  color: #4a4a4a;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-align: center;
  max-width: 22.5rem;
  @media (min-width: 768px) {
    line-height: 2.25rem;
    font-size: 1.5rem;
    max-width: 30rem;
  }
`;

const SearchCity = styled.span`
  color: #00ace2;

  &:after {
    width: 15px;
    height: 15px;
    display: inline-block;
    content: "";
    margin-left: 0.5rem;
    background: url(${edit}) no-repeat;
  }
`;

export default () => (
  <Grid>
    <Wrapper>
      <SearchImg src={compass} alt="compass" />
      <SearchForm>
        Популярные направления перелетов из города{" "}
        <SearchCity>Москва</SearchCity>
      </SearchForm>
    </Wrapper>
  </Grid>
);

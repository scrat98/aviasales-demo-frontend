import React from "react";
import styled, { css } from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import SearchForm from "../SearchForm";

const Background = styled.div`
  background: linear-gradient(to left, #196ebd, #01b0dd);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  ${props =>
    props.compact
      ? css`
          height: auto;
          min-height: auto;
          padding-top: 0;
        `
      : css`
          height: 100vh;
          min-height: 32.375rem;
          padding-top: 3.25rem;
        `};
`;

const HeaderWrapper = styled.div`
  display: ${props => (props.compact ? "none" : "flex")};
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 0;
  line-height: normal;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    line-height: 3rem;
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    line-height: 3rem;
    font-size: 2.5rem;
  }
`;

const HeaderAside = styled.h2`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: white;
  margin: 0.5rem 0 0;
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 1.25rem;
  }

  @media (min-width: 992px) {
    display: block;
    font-size: 1.5rem;
  }
`;

export default ({ compact }) => (
  <Background>
    <Grid>
      <Row>
        <Col xs={12} md={compact ? 12 : 10} mdOffset={compact ? 0 : 1}>
          <ContentWrapper compact={compact}>
            <HeaderWrapper compact={compact}>
              <HeaderTitle>Поиск дешевых авиабилетов</HeaderTitle>
              <HeaderAside>Лучший способ купить авиабилеты дешево</HeaderAside>
            </HeaderWrapper>
            <SearchForm compact={compact} />
          </ContentWrapper>
        </Col>
      </Row>
    </Grid>
  </Background>
);

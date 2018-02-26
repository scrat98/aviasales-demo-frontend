import React from "react";
import styled, { css } from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logo from "./icons/logo.svg";
import back from "./icons/back.svg";

const Background = styled.nav`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  ${props =>
    props.compact
      ? css`
          display: block;
        `
      : css`
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;

          @media (min-width: 1024px) {
            position: fixed;
          }
        `};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;

  ${props =>
    props.compact &&
    css`
      display: none;

      @media (min-width: 768px) {
        display: flex;
      }
    `};
`;

const LogoImg = styled.img`
  width: 30px;
  height: 29px;
`;

const LogoText = styled.span`
  margin: 0 0.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Currency = styled.div`
  display: ${props => (props.compact ? "block" : "none")};
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 100px;

  @media (min-width: 768px) {
    padding: 0.5rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const SearchInfoWrapper = styled.div`
  ${props =>
    props.compact
      ? css`
          display: flex;

          @media (min-width: 768px) {
            display: none;
          }
        `
      : css`
          display: none;
        `};
`;

const BackLink = styled.a`
  display: flex;
  align-items: center;
  justify-conntent: center;
  margin-right: 1.5rem;
  background: transparent;
  border: none;
  padding: 0;
`;

const SearchParametersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchLocation = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 1.2rem;
  font-size: 1rem;
  color: white;
`;

const SearchDetails = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.8rem;
  color: white;
`;

export default ({ compact }) => (
  <Background compact={compact}>
    <Grid fluid={!matchMedia("(min-width: 768px)").matches}>
      <Row middle="xs">
        <Col xs>
          <Wrapper>
            <LogoWrapper href="/" compact={compact}>
              <LogoImg src={logo} alt="Logo" />
              <LogoText>aviasales</LogoText>
            </LogoWrapper>
            <SearchInfoWrapper compact={compact}>
              <BackLink href="/">
                <img src={back} />
              </BackLink>
              <SearchParametersWrapper>
                <SearchLocation>Москва — Барселона</SearchLocation>
                <SearchDetails>24 фев — 3 март, 1 пассажир</SearchDetails>
              </SearchParametersWrapper>
            </SearchInfoWrapper>
            <ToolbarWrapper>
              <Currency compact={compact}>rub</Currency>
            </ToolbarWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  </Background>
);
